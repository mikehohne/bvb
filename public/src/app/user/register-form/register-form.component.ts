import { UserService } from './../../services/user.service';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})
export class RegisterFormComponent implements OnInit {
  $response: any;
  user: any = {
    username: 'tina-bull',
    password: '1234'
  };

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  login() {
    this.userService.login(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
