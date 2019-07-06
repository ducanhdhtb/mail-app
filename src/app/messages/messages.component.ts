import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messagesItems = [];

  constructor(private dataService: DataService) {
    this.messagesItems = dataService.getUniqueFolders();
  }

  onClick() {
    console.log('Test');
    this.dataService.setDisabled(true);
  }

  ngOnInit() {}
}
