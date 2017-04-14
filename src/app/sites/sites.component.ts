import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  // instantiate sites to an empty array
  sites: any = [];
  showAll = true;

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    // Retrieve sites from the API
    this.sitesService.getAllSites().subscribe(sites => {
      this.sites = sites;
      console.log("alan: sites", this.sites)
    });
  }

  doStuff(id: number){
  	this.sitesService.showAll = !this.sitesService.showAll;
  }
}