import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messagesItems = [
    "inbox",
    "finance",
    "travel",
    'personal',
    "spam",
    "drafts",
    "sent"

  ]
  constructor() { }

  ngOnInit() {
  }

}
