interface IParticipant {
  name: string;
  chatroom: Chatroom;
  setChatroom(chatroom: Chatroom): void;
  send(message: string, to?: IParticipant): void;
  receive(message: string, from: IParticipant): void;
}

interface IChatroom {
  participants;
  register(participant: IParticipant): void;
  send(message: string, from: IParticipant, to: IParticipant): void;
}

class Participant implements IParticipant {
  public name;
  public chatroom = null;

  constructor(name: string) {
    this.name = name;
  }

  public setChatroom(chatroom: Chatroom) {
    this.chatroom = chatroom;
  }

  public send(message: string, to?: IParticipant) {
    this.chatroom.send(message, this, to);
  }

  public receive(message: string, from: IParticipant) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom implements IChatroom {
  public participants = {};

  public register(participant: IParticipant) {
    this.participants[participant.name] = participant;
    participant.setChatroom(this);
  }

  public send(message: string, from: IParticipant, to: IParticipant) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.participants).forEach(key => {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      });
    }
  }
}

function run() {
  const liam = new Participant('Liam');
  const noah = new Participant('Noah');
  const william = new Participant('William');
  const james = new Participant('James');

  const chatroom = new Chatroom();

  chatroom.register(liam);
  chatroom.register(noah);
  chatroom.register(william);
  chatroom.register(james);

  liam.send('All you need is love.');
  liam.send('I love you John.');
  noah.send('Hey, no need to broadcast', liam);
  william.send('Ha, I heard that!');
  james.send('William, what do you think?', william);
}

run();
