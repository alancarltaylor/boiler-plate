import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { SitesService } from '../../services/sites.service';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
	site: {id: number, title: string, body: string};

  constructor(private sitesService: SitesService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {

  	// this.route.data
   //    .subscribe(
   //      (data: Data) => {
   //        this.site = data['site'];
   //      }
   //    );

    const id = +this.route.snapshot.params['id'];
    
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.site = this.sitesService.getSite(+params['id']);
    //     }
    //   );

  }

}
