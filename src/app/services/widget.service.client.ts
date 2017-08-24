import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private _http: Http, private router: Router) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();


  widgets: any[] = [
    { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];


  createWidget(pageId, widget){
    this.widgets.push(widget);
  }


  findWidgetsByPageId(pageId){
    /*retrieves the websites in local websites array whose developerId matches the parameter userId */
    let resultSet = [];
    for (let i in this.widgets){
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }



  findWidgetById(widgetId){
    for (let i in this.widgets){
      if(this.widgets[i]._id === widgetId){
        return this.widgets[i];

      }
    } return null;
  }

  updateWidget(widgetId, widget){
    for (let i in this.widgets){
      if(this.widgets[i]._id === widgetId){
        switch (widget.widgetType){
          case "HEADER":
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case "IMAGE":
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            this.widgets[i].file = widget.file;
            return true;

          case "YOUTUBE":
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId){
    for (let i in this.widgets){
      if (this.widgets[i]._id === widgetId){
        // To typecast the loop variable as an integer for the splice
        // function to work
        let j = +i;
        this.widgets.splice(j, 1);
        return true;
      }
    }
    return false;

  }



}
