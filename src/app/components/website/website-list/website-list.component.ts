import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";

import 'rxjs/Rx';

import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  constructor(private _websiteService : WebsiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.findWebsitesByUser();
  }

  userId : String;
  websites : any[];

  findWebsitesByUser(){
    const websites = this._websiteService.findWebsitesByUser(this.userId);
    this.websites = websites;
    console.log(this.websites);
  }

  // findWebsiteByWebsite(websiteId){
  //   const website = this._websiteService.findWebsitesByWebsite(websiteId);
  // }
  //
  // updateWebsite(website){
  //   this._websiteService.updateWebsite();
  //   this.ngOnInit();
  // }


}
