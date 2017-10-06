import {NgModule, Component} from '@angular/core';
//BrowserModule - module needed for running Angular websites
import {BrowserModule} from '@angular/platform-browser'
//this will allow us to bootstrap, or launch the app
import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// decorator
//@Component used to apply our component decorator to our class;
@Component({
    selector: 'my-app', // the css selector for the HTML element where we want the component to load
    template: `<h1>{{title}}</h1>
    <h2>{{carPart.name}}</h2>
    <p>{{carPart.description}}</p>
    <p>{{carPart.inStock}} in Stock</p>` //the content we want to load inside our selector
})

// class
class AppComponent {
    title = 'Ultra Racing';
    carPart = {
        "id":1,
        "name":"super Tires",
        "description":"these tires are the very best",
        "inStock":5
    }
}

@NgModule({
    declaration: [AppComponent],
    imports: [BrowserModule], // loads required dependencies to launch our app in the browser
    bootstrap: [AppComponent] //indicates our root component
})
class AppModule {}

platformBrowserDynamic()
    .bootstrapModule(AppModule); // render application using AppModule