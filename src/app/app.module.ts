import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { LoginComponent } from './login/login.component';
import { SitesService } from './services/sites.service';
import { SiteComponent } from './sites/site/site.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sites',
    component: SitesComponent, 
    children: [
    { path: ':id', component: SiteComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    LoginComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
