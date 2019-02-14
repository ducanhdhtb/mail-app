import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
interface Person {
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: Object;
  corpus: string;
  _id: string;
}

@Component({
  selector: 'app-messagesdetail',
  templateUrl: './messagesdetail.component.html',
  styleUrls: ['./messagesdetail.component.css']
})
export class MessagesdetailComponent implements OnInit {

  detail: Person[];
  finnaldetail:Person[];
  folder='';
  constructor(private dataservice: DataService,private route: ActivatedRoute) {
    this.detail = this.dataservice.getData();   
    console.log(this.detail) 
  }

  ngOnInit() {
    this.route.paramMap.subscribe((curr: ParamMap) => {
      this.folder = curr.get('id');
      this.finnaldetail = this.detail.filter((d: Person) => d.folder === this.folder);
      console.log(this.finnaldetail)
    });
  }

}    ;;
