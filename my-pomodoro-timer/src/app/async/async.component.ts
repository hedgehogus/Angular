import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.asynchronousOperation().then(this.notifyCompletion);
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

 

}
