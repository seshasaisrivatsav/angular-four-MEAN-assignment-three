import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from "../../../services/website.service.client";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  constructor(private route: ActivatedRoute,  private router: Router, private _websiteService : WebsiteService) { }

  website : any;
  userId : String;

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

  createWebsite(){
    this._websiteService.createWebsite(this.website);
    this.router.navigate(['/user', this.userId, 'website']);
  }

}
