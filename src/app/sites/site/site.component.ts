import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { SitesService } from '../../services/sites.service';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit, OnDestroy {
  site: any;
  constructor(private sitesService: SitesService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.sitesService.getOneSite(id).subscribe(site => {
      this.site = site;
      console.log("this.site line 26: ", this.site)
      this.site.title = site[0].title;
      console.log("this.site title: ", this.site.title);
      this.site.body = site[0].body;
      console.log("this.site body: ", this.site.body);
    });

  }

  ngOnDestroy(){
    this.sitesService.showAll = !this.sitesService.showAll;
  }

}
