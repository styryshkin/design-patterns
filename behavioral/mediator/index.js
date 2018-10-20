class Participant {
    name;
    chatroom = null;

    constructor (name) {
      this.name = name
    }

    setChatroom (chatroom) {
      this.chatroom = chatroom
    }

    send (message, to) {
      this.chatroom.send(message, this, to)
    }

    receive (message, from) {
      console.log(`${ from.name } to ${ this.name }: ${ message }`)
    }
}

class Chatroom {
    participants = {};

    register (participant) {
      this.participants[participant.name] = participant
      participant.setChatroom(this)
    }

    send (message, from, to) {
      if (to)
        to.receive(message, from)
      else
        Object.keys(this.participants).forEach(key => {
          if (this.participants[key] !== from)
            this.participants[key].receive(message, from)

        })

    }
}

function run () {
  const liam = new Participant('Liam')
  const noah = new Participant('Noah')
  const william = new Participant('William')
  const james = new Participant('James')

  const chatroom = new Chatroom()

  chatroom.register(liam)
  chatroom.register(noah)
  chatroom.register(william)
  chatroom.register(james)

  liam.send('All you need is love.')
  liam.send('I love you John.')
  noah.send('Hey, no need to broadcast', liam)
  william.send('Ha, I heard that!')
  james.send('William, what do you think?', william)
}

run()
