import { enableProdMode,NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser'
 
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
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
   // declaration: [AppComponent],
    imports: [BrowserModule], // loads required dependencies to launch our app in the browser
    bootstrap: [AppComponent] //indicates our root component
})


class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
