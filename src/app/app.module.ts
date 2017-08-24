import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

/* Client Services Here */
import {TestService} from './services/test.service.client';
import {WebsiteService} from "./services/website.service.client";
import {PageService} from './services/page.service.client';
import {UserService} from "./services/user.service.client";

/*  IMPORT COMPONENTS HERE  */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';


/* THIS IS SUPPOSED TO IMPORT THE COMPONENTS TO APP MODULE FILE
 BUT CURRENT VERSION OF ANGULAR CLI HAS A BUG
 YOU HAVE TO MANUALLY FIX IT
MAKE SURE THE COMPONENTS ARE MENTIONED IN THE DECLARATIONS */



@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, UserService, WebsiteService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
