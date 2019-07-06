import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MessagesComponent,
    children: [
      {
        path: ':folder',
        component: EmailPreviewComponent
      },
      {
        path: 'view/:id',
        component: EmailDetailComponent,
        outlet: 'emailDetail'
      }
    ]
  },
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
