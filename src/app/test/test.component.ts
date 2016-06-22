import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-test',
  template: require('./test.component.html'),
  styles: [require('./test.component.scss')]
})
export class TestComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Test');
  }

}
