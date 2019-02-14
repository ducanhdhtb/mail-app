import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
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
  selector: "app-messages-child",
  templateUrl: "./messages-child.component.html",
  styleUrls: ["./messages-child.component.css"]
})
export class MessagesChildComponent implements OnInit {
  data : Person[];
  dataz : Person[];
  p: number = 1;

  folder="";
  constructor(private dataservice: DataService, private route: ActivatedRoute) {
    this.data = this.dataservice.getData();    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((curr: ParamMap) => {
      this.folder = curr.get('messagesChild');
      console.log(this.folder);
      this.dataz = this.data.filter((d: Person) => d.folder == this.folder);
    });
  }
}


