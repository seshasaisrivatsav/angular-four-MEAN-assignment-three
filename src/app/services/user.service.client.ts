import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http, private router: Router) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();


  users: any[] = [
  {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' , email: 'alice@wonderland.com'},
  {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley' , email: 'bob@wonderland.com'},
  {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: 'charyl@wonderland.com'},
  {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jannunzi@wonderland.com'}
];

  findUserByCredentials(username, password) {
    let result;
    for (const i in this.users) {
      if (this.users[i].username === username
        && this.users[i].password === password) {
        result = this.users[i];
        return result;
      }
    }

    const errMsg = this.generateError(username, password);
    return errMsg;
}

  generateError(username, password) {
    for (const i in this.users) {
    if (this.users[i].username === username &&
      this.users[i].password !== password) {
      return 'Wrong Password. Wake Up!';
    }
  } return 'Username doesnt exist !!!';

}




  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findUserById(userId: String) {
    let result;
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        result = this.users[i];
        return result;
      }
    }

  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(user) {
    for (const i in this.users) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        this.users[i].email = user.email;
      }
    }
  }

}
