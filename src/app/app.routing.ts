/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from "./components/user/profile/profile.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {PageListComponent} from "./components/page/page-list/page-list.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {WidgetListComponent} from "./components/widget/widget-list/widget-list.component";
import {WidgetNewComponent} from "./components/widget/widget-new/widget-new.component";
import {WidgetEditComponent} from "./components/widget/widget-edit/widget-edit.component";



const APP_ROUTES: Routes = [

  { path: '', component : LoginComponent},
  { path: 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'user/:userId' , component: ProfileComponent},
  { path : 'user/:userId/website' , component: WebsiteListComponent},
  { path : 'user/:userId/website/new' , component: WebsiteNewComponent},
  { path : 'user/:userId/website/:websiteId' , component:WebsiteEditComponent },
  { path : 'user/:userId/website/:websiteId/page' , component: PageListComponent},
  { path : 'user/:userId/website/:websiteId/page/new' , component: PageNewComponent},
  { path : 'user/:userId/website/:websiteId/page/:pageId' , component: PageEditComponent},
  { path : 'user/:userId/website/:websiteId/page/:pageId/widget' , component:WidgetListComponent },
  { path : 'user/:userId/website/:websiteId/page/:pageId/widget/new' , component: WidgetNewComponent },
  { path : 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId' , component: WidgetEditComponent }
];
// TO AUTOMATICALLY ADD THE IMPORT STATEMENT, I WILL CLICK THE
// COMPONENT NAME AND CLICK "ALT + ENTER"
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
