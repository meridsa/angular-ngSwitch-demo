import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  fruits = FRUITS;
}

const FRUITS = [
  {name: 'apple', colour: 'red'},
  {name: 'banana', colour: 'yellow'},
  {name: 'made up', colour: null}
]