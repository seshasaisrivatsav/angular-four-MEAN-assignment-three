import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {UserService} from "../../../services/user.service.client";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //properties
  username : String;
  firstName : String;
  lastName : String;
  email : String;
  user = {};
  userId : String;
  errorFlag : boolean;
  errorMsg = 'Invalid username or password !';


  constructor(private _userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
        if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.getUser();


  }

  logout() {


     this.router.navigate(['/login']);

  }

  getUser() {

    const curUser = this._userService.findUserById(this.userId);
    if (curUser) {
      this.username = curUser.username;
      this.firstName = curUser.firstName;
      this.lastName = curUser.lastName;
      this.email = curUser.email;

    }


  }


  updateUser() {
    let updatedUser = {
      _id : this.userId,
      username : this.username,
      firstName :this.firstName,
      lastName :  this.lastName,
      email : this.email

    };
    this._userService.updateUser(updatedUser);
    this.ngOnInit();
  }





}
