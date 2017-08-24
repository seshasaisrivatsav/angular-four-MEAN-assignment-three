import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _pageService: PageService) { }

  // Properties
  userId : String;
  websiteId: String;
  page: any;
  pageId : any;

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


    this.findPageById();

  }

  findPageById(){
    this.page = this._pageService.findPageById(this.pageId);
  };

  deletePage(){
    this._pageService.deletePage(this.pageId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  };

  updatePage(){
    this._pageService.updatePage(this.pageId, this.page);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  };

}
