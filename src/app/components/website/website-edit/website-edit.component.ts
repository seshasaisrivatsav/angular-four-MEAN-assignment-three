import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute, private _websiteService : WebsiteService) { }

  website : any = {name: "", description : "", developerId : ""};
  websites : any[];
  userId : String;
  websiteName : String;
  websiteDescription : String;
  websiteId : String;

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.route.params.subscribe(params => {
      if (params['websiteId']) {
        this.websiteId = params['websiteId'];
      }
    });

    this.findWebsiteById();
    this.findWebsitesByUser();
  }

  findWebsitesByUser(){
    const websites = this._websiteService.findWebsitesByUser(this.userId);
    this.websites = websites;
  }

  findWebsiteById(){

    this.website = this._websiteService.findWebsiteById(this.websiteId);
    this.websiteName = this.website.name;
    this.websiteDescription = this.website.description;

  }

  updateWebsite(){
    let updatedWebsite = { name : this.websiteName, description : this.websiteDescription};
    this._websiteService.updateWebsite(this.websiteId, updatedWebsite);
    this.ngOnInit();
  }


  deleteWebsite(){
    this._websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.userId,  'website'])
  }


}
