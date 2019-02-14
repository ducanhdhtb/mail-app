import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MessagesChildComponent } from "./messages-child/messages-child.component";
import { MessagesdetailComponent } from './messagesdetail/messagesdetail.component';

const routes: Routes = [
  {
    path: "messages",
    component: MessagesComponent,
    children: [
      {
        path: ":messagesChild",
        component: MessagesChildComponent,
        
        children :[
          { path:":id",
           component:MessagesdetailComponent,
          
          }
        ]
      }
    ]
  },
  { path: "", redirectTo: "messages", pathMatch:"full"},
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
