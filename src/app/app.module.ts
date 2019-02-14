import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MessagesChildComponent } from './messages-child/messages-child.component';
import { DataService} from './data.service'
import {NgxPaginationModule} from 'ngx-pagination';
import { MessagesdetailComponent } from './messagesdetail/messagesdetail.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ContactComponent,
    AboutComponent,
    MessagesChildComponent,
    MessagesdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers:[DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
