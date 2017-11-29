import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer_icons = [
    {
      "icon": "assets/images/icons/twitter.png",
      "link": "https://twitter.com/farmkart"
    },
    {
      "icon": "assets/images/icons/linked.png",
      "link": "https://www.linkedin.com/company/farmkart"
    },
    {
      "icon": "assets/images/icons/insta.png",
      "link": "https://www.instagram.com/farmkart/"
    },
    {
      "icon": "assets/images/icons/facebook.png",
      "link": "https://www.facebook.com/farmkartofficial/"
    }
  ];

  footer_menu= [
    {
      "text": "ABOUT US",
      "link": "/about-us"
    },{
      "text": "OUR NETWORK",
      "link": "/our-network"
    },{
      "text": "NEWSROOM",
      "link": "/newsroom"
    },{
      "text": "CAREERS",
      "link": "/careers"
    },{
      "text": "CONTACT US",
      "link": "/contact-us"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  show(){
    if (this.router.url == "/home" || this.router.url.indexOf("/newsroom") != -1){
      return false;
    }else{
      return true;
    }
  }

}
