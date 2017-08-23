import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  // TODO : fix authentication using pasport

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit() {}


  login() {

    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    const a = this._userService.findUserByCredentials(this.username, this.password);
    if (a) {
      console.log(a);
      this.router.navigate(['/user', a._id]);
    }
  }
}
