import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bvb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() count: any = this.count || 1;

  constructor() { }

  ngOnInit() {
  }

}
