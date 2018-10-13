import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bvb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

}
