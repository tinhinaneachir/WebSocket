import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { RxStompService } from '../rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  receivedMessages: string[] = [];
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;
  @ViewChild('lesbogoss') bogoss: ElementRef | undefined;
  @ViewChild('message') message: ElementRef | undefined;

  constructor(private rxStompService: RxStompService ) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch('/topic/demo')
      .subscribe((message: Message) => {
        this.receivedMessages.push(message.body);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    let message = this.bogoss?.nativeElement.value +": "+ this.message?.nativeElement.value;
    this.rxStompService.publish({ destination: '/topic/demo', body: message });
  }
}
