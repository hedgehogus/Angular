import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  response:string = "no";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.asynchronousOperation().then(this.notifyCompletion);
    //this.obs();
    //this.keys();
    this.reque();
  }

  // Promise with setInterval

  notifyCompletion(){
    console.log('our asynk operation has been completed');
  }

  asynchronousOperation() {
    var promise = new Promise((resolve, reject) => {
      setInterval(resolve, 5000);
    });
    return promise;
  }

  //observable

  obs(){
    var observable = Observable.create(observer => {
      setInterval(() => {
          observer.next('My async operation');
        }, 5000); 
    });

    observable.subscribe(response => console.log(response));
    
  }

  keys(){
    var keyboardStream = Observable
          .fromEvent(document, 'keyup')
          .map(x => {return x.which})
          .filter(x => {return x > 36 && x < 41})
          .map(x => {
            var direction; 
            switch(x) {
              case 37:
                direction = 'left'; 
                break;
              case 38:
                direction = 'up'; 
                break;
              case 39:
                direction = 'right'; 
                break;
              default:
                direction = 'down';
            }
            return direction;});

    keyboardStream.subscribe(response => console.log(response));
  };

  reque(){
    var myHttpRequest: Observable<Object> = this.http.get('https://api.github.com');

    myHttpRequest.subscribe(data => {
      console.log(data.current_user_url);
      this.response = data.current_user_url;
    });
  }

}
