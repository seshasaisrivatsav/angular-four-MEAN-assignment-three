import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private _http: Http, private router: Router) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();


  websites: any[] = [
    { "_id": "123", "name": "Facebook",    "developerId": "456" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
    { "_id": "678", "name": "Checkers",    "developerId": "123" },
    { "_id": "789", "name": "Chess",       "developerId": "234" }
  ];

  findWebsitesByUser(userId){
    console.log(userId, "in client");
    /*retrieves the websites in local websites array whose developerId matches the parameter userId */
    let resultSet = [];
    for (let i in this.websites){
      if (this.websites[i].developerId === userId) {
        resultSet.push(this.websites[i]);
      }
    }
    return resultSet;
  }




}
