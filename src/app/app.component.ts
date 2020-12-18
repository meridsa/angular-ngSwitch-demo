import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  fruits = FRUITS;
  colours = COLOUR;
}

enum COLOUR {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue'
}

const FRUITS = [
  {name: 'apple', colour: COLOUR.RED},
  {name: 'banana', colour: COLOUR.YELLOW},
  {name: 'made up', colour: null}
]