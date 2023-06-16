import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();

  messageMap:any = {
    "Hola": "Bienvenid@ al chat de Cámara de comercio del Cauca",
    "hola": "Bienvenid@ al chat de Cámara de comercio del Cauca",
    "buenas tardes": "Bienvenid@ al chat de Cámara de comercio del Cauca",
    "1": "Convocatorias: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula purus, pharetra sit amet mi lobortis.",
    "2": "Trámites: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula purus, pharetra sit amet mi lobortis.",
    "3": "Eventos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula purus, pharetra sit amet mi lobortis.",
    "default": "Estas son las opciones de ayuda que tengo para ti: \n 1) Convocatorias \n 2)Trámites \n 3)Eventos \n  Por favor responde con el número asociado a cada tema."
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
