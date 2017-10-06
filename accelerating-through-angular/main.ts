import {NgModule, Component} from '@angular/core';
//BrowserModule - module needed for running Angular websites
import {BrowserModule} from '@angular/platform-browser'
//this wi;; allow us to bootstrap, or launch the app
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// decorator
//@Component used to apply our component decorator to our class;
@Component({
    selector: 'my-app', // the css selector for the HTML element where we want the component to load
    template: '<h1>Ultra Racing<h1>' //the content we want to load inside our selector
})

// class
class AppComponent {}

@NgModule({
    declaration: [AppComponent],
    imports: [BrowserModule], // loads required dependencies to launch our app in the browser
})
class AppModule {}