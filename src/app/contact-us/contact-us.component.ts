import { ElementRef, Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  lat1: number = 22.037834;
  lng1: number = 74.892794;

  lat2: number = 22.652794;
  lng2: number = 75.818920;

  lat3: number = (this.lat1 + this.lat2)/2;
  lng3: number = (this.lng1 + this.lng2)/2;

  address = "1, Saket Residency Barwani,"+ "<br/> Madhya Pradesh 451551, India";
  phone = "+91 94250-87517<br>+91 90099-87517";

  constructor(private element: ElementRef, private http:Http) {
    window.scrollTo(0,0);
  }

  ngOnInit() {
    window.scrollTo(0,5);
  }
  }