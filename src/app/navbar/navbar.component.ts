import { ElementRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationEnd } from '@angular/router';
import { WindowRef } from '../window.service';
import { PipeService } from '../pipe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {'(window:scroll)': 'change_nav_bar_appearance($event)',
         '(window:resize)': 'change_init_navbar()'}
})
export class NavbarComponent implements OnInit {

  image_fade_time = 4000;

  image_bank = [
      [
        "assets/images/navbar_images/aboutus1.jpg",
        "assets/images/navbar_images/aboutus2.jpg",
      ],
      [
        "assets/images/navbar_images/network1.jpg",
        "assets/images/navbar_images/network2.jpg",
      ],
      [
        "assets/images/navbar_images/news1.jpg",
        "assets/images/navbar_images/news2.jpg",
        "assets/images/navbar_images/news3.jpg",
      ],
      [
        "assets/images/navbar_images/connect1.jpg",
        "assets/images/navbar_images/connect2.jpg",
      ]
  ];

  link_bank = [
      [
        {
          "item": "Mission & Vision",
          "link": "/about-us",
          "fragment": "mission"
        },
        {
          "item": "Our Story",
          "link": "/about-us",
          "fragment": "story"
        },
        {
          "item": "Message From The CEO",
          "link": "/about-us",
          "fragment": "message"
        },
        {
          "item": "Our Team",
          "link": "/about-us",
          "fragment": "team"
        }
      ],
      [
        {
          "item": "Our Partners",
          "link": "/our-network",
          "fragment": "partners"
        },
        {
          "item": "Partner With Us",
          "link": "/our-network",
          "fragment": "partner_with_us"
        },
        {
          "item": "Board Of Directors",
          "link": "/our-network",
          "fragment": "board"
        },
        {
          "item": "Investments",
          "link": "/our-network",
          "fragment": "investments"
        }
      ],
      [
        {
          "item": "Blogs",
          "link": "/newsroom",
          "fragment": "blogs"
        },
        {
          "item": "News",
          "link": "/newsroom",
          "fragment": "news"
        }
      ],
      [
        {
          "item": "Careers",
          "link": "/careers",
          "fragment": ""
        },
        {
          "item": "Contact Us",
          "link": "/contact-us",
          "fragment": ""
        }
      ]
  ];

  active_images = [];
  active_links = [];
  curr_tab:any;

  img_index = 0;
  faded_img = "";
  sticky_img = "";
  sticky = true;
  subnavbar = true;
  timer: Observable<number>;
  private subscription;

  nav_style = {
    "background-color": "rgba(255,255,255,0)",
    "border-bottom": "1px solid rgba(255,255,255,.4)",
    "margin-left": "1rem",
    "margin-right": "1rem",
    "padding": ".5rem 1rem"
  };

  hamburger_icon_style = {
    "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)"
  }

  link_style = {
    "color": "rgb(255,255,255)"
  };

  logo_src = "assets/images/logo/Farmkart_Logo_White.png";

  window: Window;
  curr_path = "";

  constructor(private element: ElementRef, private router: Router, private win: WindowRef, private pipe: PipeService) {
    this.window = win.nativeWindow;
    this.active_images = this.image_bank[0];
    this.faded_img = this.active_images[this.img_index + 1];
    this.sticky_img = this.active_images[this.img_index];
  }

  ngOnInit(){
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        if (this.curr_path != window.location.pathname){
          window.scrollTo(0,0);
        }
        this.change_init_navbar();
        const tree = this.router.parseUrl(this.router.url);
        this.curr_path = window.location.pathname;
        if(this.curr_path == "/newsroom"){
          this.pipe.newsroom_fragment = tree.fragment;
        }
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            setTimeout(() => {
              this.smoothScroll(tree.fragment);
            },200);
          }
        }
      }
    });
  }

  scrollTo(yPoint: number, duration: number) {
      setTimeout(() => {
          this.window.window.scrollTo(0, yPoint)
      }, duration);
      return;
  }

  smoothScroll(eID) {
      var startY = currentYPosition();
      var stopY = elmYPosition(eID) - 80;
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
          this.window.window.scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 100);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
          for (var i = startY; i < stopY; i += step) {
              this.scrollTo(leapY, timer * speed);
              leapY += step; if (leapY > stopY) leapY = stopY; timer++;
          }
          return;
      }
      for (var i = startY; i > stopY; i -= step) {
          this.scrollTo(leapY, timer * speed);
          leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
  }

  change_init_navbar(){
    if((this.router.url.indexOf("/newsroom") == -1 && this.router.url.indexOf("/jobs") == -1) && this.window.innerWidth >= 992){
      this.nav_style = {
        "background-color": "rgba(255,255,255,0)",
        "border-bottom": "1px solid rgba(255,255,255,.4)",
        "margin-left": "1rem",
        "margin-right": "1rem",
        "padding": ".5rem 1rem"
      };

      this.link_style = {
        "color": "rgb(255,255,255)"
      };

      this.logo_src = "assets/images/logo/Farmkart_Logo_Total_White.png";

      this.hamburger_icon_style = {
        "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
      }

    }else{
      this.nav_style = {
        "background-color": "rgba(255,255,255,.95)",
        "border-bottom": "1px solid rgba(0,0,0,.15)",
        "margin-left": "0",
        "margin-right": "0",
        "padding": ".5rem 2rem"
      };

      this.link_style = {
        "color": "#595959"
      };

      this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

      this.hamburger_icon_style = {
        "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
      }
    }

    if (this.window.innerWidth < 992){
      var links = this.element.nativeElement.querySelectorAll('.cat_links');
      var links2 = this.element.nativeElement.querySelectorAll('.links');

      for(let link of links){
        link.opacity = 1;
      }

      for(let link of links2){
        link.style.fontSize = "12pt";
      }

    }else{
      var links = this.element.nativeElement.querySelectorAll('.cat_links');
      var links2 = this.element.nativeElement.querySelectorAll('.links');

      for(let link of links){
        link.opacity = 0.7;
      }

      for(let link of links2){
        link.style.fontSize = "1.1vw";
      }
    }
  }

  change_nav_bar_appearance(event){
    if((this.router.url.indexOf("/about-us") != -1 || this.router.url.indexOf("/careers") != -1) && (this.window.innerWidth >= 992)){
      if(currentYPosition() < 460){
        this.nav_style = {
          "background-color": "rgba(255,255,255,0)",
          "border-bottom": "1px solid rgba(255,255,255,.4)",
          "margin-left": "1rem",
          "margin-right": "1rem",
          "padding": ".5rem 1rem"
        };

        this.link_style = {
          "color": "rgb(255,255,255)"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Total_White.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }else{
        this.nav_style = {
          "background-color": "rgba(255,255,255,.95)",
          "border-bottom": "1px solid rgba(0,0,0,.15)",
          "margin-left": "0",
          "margin-right": "0",
          "padding": ".5rem 2rem"
        };

        this.link_style = {
          "color": "#595959"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }
    }else if((this.router.url.indexOf("/our-network") != -1) && (this.window.innerWidth >= 992)){
      if(currentYPosition() < 460){
        this.nav_style = {
          "background-color": "rgba(255,255,255,0)",
          "border-bottom": "1px solid rgba(255,255,255,.4)",
          "margin-left": "1rem",
          "margin-right": "1rem",
          "padding": ".5rem 1rem"
        };

        this.link_style = {
          "color": "rgb(255,255,255)"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Total_White.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }else{
        this.nav_style = {
          "background-color": "rgba(255,255,255,.95)",
          "border-bottom": "1px solid rgba(0,0,0,.15)",
          "margin-left": "0",
          "margin-right": "0",
          "padding": ".5rem 2rem"
        };

        this.link_style = {
          "color": "#595959"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }
    }else if((this.router.url.indexOf("/contact-us") != -1) && (this.window.innerWidth >= 992)){
      if(currentYPosition() < 460){
        this.nav_style = {
          "background-color": "rgba(255,255,255,0)",
          "border-bottom": "1px solid rgba(255,255,255,.4)",
          "margin-left": "1rem",
          "margin-right": "1rem",
          "padding": ".5rem 1rem"
        };

        this.link_style = {
          "color": "rgb(255,255,255)"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Total_White.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }else{
        this.nav_style = {
          "background-color": "rgba(255,255,255,.95)",
          "border-bottom": "1px solid rgba(0,0,0,.15)",
          "margin-left": "0",
          "margin-right": "0",
          "padding": ".5rem 2rem"
        };

        this.link_style = {
          "color": "#595959"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }
    }else if((this.router.url.indexOf("/blogs") != -1) && (this.window.innerWidth >= 992)){
      if(currentYPosition() < 460){
        this.nav_style = {
          "background-color": "rgba(255,255,255,0)",
          "border-bottom": "1px solid rgba(255,255,255,.4)",
          "margin-left": "1rem",
          "margin-right": "1rem",
          "padding": ".5rem 1rem"
        };

        this.link_style = {
          "color": "rgb(255,255,255)"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Total_White.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }else{
        this.nav_style = {
          "background-color": "rgba(255,255,255,.95)",
          "border-bottom": "1px solid rgba(0,0,0,.15)",
          "margin-left": "0",
          "margin-right": "0",
          "padding": ".5rem 2rem"
        };

        this.link_style = {
          "color": "#595959"
        };

        this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

        this.hamburger_icon_style = {
          "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
        }
      }
    }else{
      this.nav_style = {
        "background-color": "rgba(255,255,255,.95)",
        "border-bottom": "1px solid rgba(0,0,0,.15)",
        "margin-left": "0",
        "margin-right": "0",
        "padding": ".5rem 2rem"
      };

      this.link_style = {
        "color": "#595959"
      };

      this.logo_src = "assets/images/logo/Farmkart_Logo_Black.png";

      this.hamburger_icon_style = {
        "background-image" : "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")"
      }
    }
  }

  change_image(t){
    if(t == 0){
      return;
    }

    var box1 = this.element.nativeElement.querySelector('#sticky');
    var box2 = this.element.nativeElement.querySelector('#faded');

    this.img_index++;

    if (this.img_index == this.active_images.length){
      this.img_index = 0;
    }

    if (this.sticky){
      box1.style.opacity = 0;
      box2.style.opacity = 1;
      setTimeout(() => {
        if (this.img_index + 1 == this.active_images.length){
          this.sticky_img = this.active_images[0];
        }else{
          this.sticky_img = this.active_images[this.img_index + 1];
        }
      },1000);
    }else{
      box2.style.opacity = 0;
      box1.style.opacity = 1;
      setTimeout(() => {
        if (this.img_index + 1 == this.active_images.length){
          this.faded_img = this.active_images[0];
        }else{
          this.faded_img = this.active_images[this.img_index + 1];
        }
      },1000);
    }

    this.sticky = !this.sticky;
  }

  show_subnavbar(event, index){
    var overlay = this.element.nativeElement.querySelector('#subnav_overlay');
    var triangle = this.element.nativeElement.querySelector('#subnav_triangle');

    var width_overlay = ((18/(100 / this.window.innerWidth)) + 40);
    var pos_x = elmXPosition(event.target) - ((width_overlay - (event.target.offsetWidth))/2);
    var max_val = this.window.innerWidth - 16 - width_overlay;

    if (pos_x > max_val){
      overlay.style.left = max_val + "px";
      var left_move = (((pos_x - max_val)/width_overlay)*100) + 50;
      triangle.style.left = left_move + "%";
    }else{
      overlay.style.left = pos_x + "px";
      triangle.style.left = "50%";
    }

    this.curr_tab = event.target;
    this.curr_tab.style.opacity = 1;

    this.subnavbar = false;
    this.timer = Observable.timer(0, this.image_fade_time);
    this.subscription = this.timer.subscribe(t=>this.change_image(t));
    this.active_images = this.image_bank[index];
    this.active_links = this.link_bank[index];
    this.img_index = 0;
    this.faded_img = this.active_images[this.img_index + 1];
    this.sticky_img = this.active_images[this.img_index];
    overlay.style.display = "block";
    setTimeout(() => {
      overlay.style.opacity = 1;
    },1);
  }

  hide_collapse(){
    var box = this.element.nativeElement.querySelector('.collapse');
    box.classList.remove("show");
    box.classList.remove("hide");
  }

  hide_subnavbar(event){

    if (this.window.innerWidth < 992){
      this.curr_tab.style.opacity = 1;
    }else{
      this.curr_tab.style.opacity = .7;
    }

    this.subnavbar = true;
    this.subscription.unsubscribe();
    setTimeout(() => {
      if(this.subnavbar){
        var overlay = this.element.nativeElement.querySelector('#subnav_overlay');
        var box1 = this.element.nativeElement.querySelector('#sticky');
        var box2 = this.element.nativeElement.querySelector('#faded');

        overlay.style.opacity = 0;
        this.sticky = true;

        box1.style.opacity = 1;
        box2.style.opacity = 0;

        setTimeout(() => {
          if(this.subnavbar){
            overlay.style.display = "none";
          }
        },250);
      }
    }, 100);
  }

  continue_show_subnavbar(event){
      var overlay = this.element.nativeElement.querySelector('#subnav_overlay');

      this.curr_tab.style.opacity = 1;

      this.timer = Observable.timer(0,this.image_fade_time);
      this.subscription = this.timer.subscribe(t=>this.change_image(t));
      this.subnavbar = false;
      overlay.style.display = "block";
  }

  enlarge_link(event){
    event.target.style.backgroundColor = "rgb(230,230,230)";
  }

  shrink_link(event){
    event.target.style.backgroundColor = "transparent";
  }

  border_top(pos){
    if (pos != 0){
      return{
        "border-top": "1px solid rgb(230,230,230)"
      };
    }
  }

}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = <HTMLElement><any>node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function elmXPosition(eID) {
    var x = eID.offsetLeft;
    var node = eID;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = <HTMLElement><any>node.offsetParent;
        x += node.offsetLeft;
    } return x;
}
