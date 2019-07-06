import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, DataService } from '../data.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css']
})
export class EmailPreviewComponent implements OnInit {
  folder: string;
  messages: Message[];

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    // this.activedRoute = activedRoute; ~ private key
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(({ folder }) => {
      this.folder = folder;
      this.messages = this.dataService.getMessagesByFolder(this.folder);
    });
  }
}
