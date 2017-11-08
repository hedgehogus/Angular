import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { HeroesComponent } from './heroes/heroes.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
