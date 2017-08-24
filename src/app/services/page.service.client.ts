import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
// injecting service into module
@Injectable()

export class PageService {
  constructor(private _http: Http, private router: Router) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  pages: any[] = [
    { "_id": "321", "name": "Post 1", websiteId: "123" , title : "dummy title"},
    { "_id": "432", "name": "Post 2", websiteId: "234" , title : "dummy title"},
    { "_id": "543", "name": "Post 3", websiteId: "456" , title : "dummy title"},
    { "_id": "4356", "name": "Post 4", websiteId: "789", title : "dummy title"},
    { "_id": "4562", "name": "Post 5", websiteId: "567", title : "dummy title" }
  ];


  createPage(websiteId, page){

    let newPage = {
      _id: (new Date()).getTime()+"",
      name: page.name,
      title: page.title,
      websiteId: websiteId
    };
    this.pages.push(newPage);

  }


  findPageByWebsiteId(websiteId){
    /*retrieves the websites in local websites array whose developerId matches the parameter userId */
    let resultSet = [];
    for (let i in this.pages){
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }





  findPageById(pageId){
    for (let i in this.pages){
      if(this.pages[i]._id === pageId){
        return this.pages[i];

      }
    } return null;
  }

  updatePage(pageId, page){
    for (let i in this.pages){
      if(this.pages[i]._id === pageId){
        this.pages[i].name = page.name;
        this.pages[i].title = page.title;
        return true;
      }
    }
    return false;
  }

  deletePage(pageId){
    for (let i in this.pages){
      if (this.pages[i]._id === pageId){
        // To typecast the loop variable as an integer for the splice
        // function to work
        let j = +i;
        this.pages.splice(j, 1);
        return true;
      }
    }
    return false;

  }


}
