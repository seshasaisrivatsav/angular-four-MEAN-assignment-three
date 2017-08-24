import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})

export class PageNewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _pageService: PageService) { }

  // Properties
  userId : String;
  websiteId: String;

  page : any = { name : "", title : ""};
  pageId : any;
  name: any;

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

    this.route.params.subscribe(params => {
      if (params['pageId']) {
        this.pageId = params['pageId'];
      }
    });



  }



  createPage(){
    this._pageService.createPage( this.websiteId,this.page);
    this.router.navigate(['/user',  this.userId, 'website', this.websiteId, 'page']);
  }

}
