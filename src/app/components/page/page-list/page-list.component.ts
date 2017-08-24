import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Router, ActivatedRoute} from "@angular/router";
import {PageService} from "../../../services/page.service.client";


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _pageService: PageService) { }

  // Properties
  userId : String;
  websiteId: String;
  pages: any[];


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

    this.findPagesByWebsiteId();


  }

  findPagesByWebsiteId(){
    this.pages = this._pageService.findPageByWebsiteId(this.websiteId);

  };

}
