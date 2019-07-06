import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, DataService } from '../data.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {
  message: Message;
  disabled: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ds: DataService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.message = this.ds.findById(id);
    });
  }
}
