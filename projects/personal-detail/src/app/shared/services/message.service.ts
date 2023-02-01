import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = ['Default Data'];

  constructor(){
    console.log("Aman");
  }

  add(message: string) {
    console.log(message);
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }
}
