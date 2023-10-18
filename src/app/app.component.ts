import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng-counter';
  counter: number[] = [];
  initializer: number = 0;
  incrementer: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.counter.push(this.initializer);
  }

  increment() {
    this.counter.push(this.counter[this.counter.length - 1] + this.incrementer);
  }
  
  decrement() {
    this.counter.push(this.counter[this.counter.length - 1] - this.incrementer);
  }

  reset() {
    this.counter = [];
    this.counter.push(this.initializer);
  }

  restore() {
    this.counter.pop();
    if (this.counter.length === 0) {
      this.counter.push(this.initializer);
    }
  }
}
