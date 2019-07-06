import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MessagesChildComponent } from './messages-child/messages-child.component';
import { DataService } from './data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessagesdetailComponent } from './messagesdetail/messagesdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ContactComponent,
    AboutComponent,
    MessagesChildComponent,
    MessagesdetailComponent,
    HeaderComponent,
    FooterComponent,
    EmailPreviewComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
