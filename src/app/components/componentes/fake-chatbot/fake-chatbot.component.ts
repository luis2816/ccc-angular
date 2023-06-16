import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService, Message } from './service/chat.service';

@Component({
  selector: 'app-fake-chatbot',
  templateUrl: './fake-chatbot.component.html',
  styleUrls: ['./fake-chatbot.component.css']
})
export class FakeChatbotComponent implements OnInit, AfterViewChecked{
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;
  messages: Message[] = [];
  value: string='';

  constructor(public chatService: ChatService) { }

  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
}
}
