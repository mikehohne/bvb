import { Component } from '@angular/core';

@Component({
  selector: 'bvb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  count = 1;
  placeholder = 'Notes';
  soDo() {
    console.log('firing');
  }
}
