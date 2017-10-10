import { Component } from '@angular/core';

  //  ngFor - is a structural directive
  // carPar - is a local variable
  // carParts is the array to loop through

@Component({
  selector: 'app-root',
  template: `  
    <h1>{{title| uppercase}}</h1>   
      <car-parts></car-parts>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ultra Racing';
}
