import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    MessagesModule,
    BrowserAnimationsModule,
    MessageModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
