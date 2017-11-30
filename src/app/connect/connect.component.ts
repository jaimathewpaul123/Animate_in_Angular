import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  careers = [];
  careers_index = 0;
  related = [];

  constructor(private element: ElementRef, private router: Router, private jobs: JobsServiceService) {
    this.careers = this.jobs.careers;
    window.scrollTo(0,0);
  }

  ngOnInit() {
    window.scrollTo(0,5);
  }
}
  