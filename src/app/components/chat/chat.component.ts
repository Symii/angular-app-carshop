import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  @ViewChild('scrollableDiv', { static: false }) scrollableDiv!: ElementRef;

  message: string = '';
  messages: string[] = [];

  currentDate: Date = new Date();

  formattedDate: string;

  constructor(private chatService: ChatService) {
    this.formattedDate = format(this.currentDate, 'HH:mm, d MMMM', {
      locale: pl,
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  sendMessage(): void {
    this.currentDate = new Date();
    this.formattedDate = format(this.currentDate, 'HH:mm, d MMMM', {
      locale: pl,
    });
    this.messages.push(this.message);
    this.chatService.sendMessage(this.message).subscribe((response) => {
      console.log('Message sent successfully');
    });
    this.message = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scrollableDiv.nativeElement.scrollTop =
        this.scrollableDiv.nativeElement.scrollHeight;
    }, 1);
  }
}
