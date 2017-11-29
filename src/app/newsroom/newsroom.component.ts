import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { WindowRef } from '../window.service';
import { PipeService } from '../pipe.service';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css']
})
export class NewsroomComponent implements OnInit {

  news="<br>No news at the moment. Stay tuned for more updates.";

  blogs ="";

  content_text = this.blogs;

  window: Window;
  curr_path = "";

  news_btn_style = {
    "fontFamily": "Lato-Regular",
    "fontSize": "1.3vw",
    "color": "#BABABA"
  };

  blogs_btn_style = {
    "fontFamily": "Lato-Regular",
    "fontSize": "2vw",
    "color": "#7E8890"
  };

  news_text_style = "none";
  blogs_text_style = "block";
  content = 2;

  prev_fragment = "";

  banner_image = "assets/images/news_banner.jpg";
  banner_opacity = 1;

  c_height = "0px";

  constructor(private element: ElementRef, private router: Router, private win: WindowRef, private pipe: PipeService) {
    this.window = win.nativeWindow;

    if (this.window.innerWidth >= 992){
      this.news_btn_style = {
        "fontFamily": "Lato-Regular",
        "fontSize": "2vw",
        "color": "#7E8890"
      };

      this.blogs_btn_style = {
        "fontFamily": "Lato-Regular",
        "fontSize": "1.3vw",
        "color": "#BABABA"
      }
    }else{
      this.news_btn_style = {
        "fontFamily": "Lato-Regular",
        "fontSize": "4.5vw",
        "color": "#7E8890"
      };

      this.blogs_btn_style = {
        "fontFamily": "Lato-Regular",
        "fontSize": "2.8vw",
        "color": "#BABABA"
      }
    }
    
  }

  ngOnInit() {
    this.curr_path = window.location.pathname;

    const tree = this.router.parseUrl(this.router.url);

    if(tree.fragment == "blogs"){
      this.blogs_text_style =  "block";
      this.news_text_style =  "none";
      this.content = 1;

      if (this.window.innerWidth >= 992){
        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2vw",
          "color": "#7E8890"
        };

        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "1.3vw",
          "color": "#BABABA"
        };
      }else{

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "4.5vw",
          "color": "#7E8890"
        };

        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2.8vw",
          "color": "#BABABA"
        };
      }

      this.banner_opacity = 1;

      this.banner_image = "assets/images/blogs_banner.jpg";
    }else if(tree.fragment == "news"){
      this.news_text_style =  "block";
      this.blogs_text_style =  "none";
      this.content = 1;

      if (this.window.innerWidth >= 992){
        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2vw",
          "color": "#7E8890"
        };

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "1.3vw",
          "color": "#BABABA"
        }
      }else{
        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "4.5vw",
          "color": "#7E8890"
        };

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2.8vw",
          "color": "#BABABA"
        }
      }

      this.banner_opacity = 1;

      this.banner_image = "assets/images/news_banner.jpg";
    }
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        window.scrollTo(0,0);
        const tree = this.router.parseUrl(this.router.url);
        this.curr_path = window.location.pathname;
        this.set_values(tree.fragment);
      }
    });

    var height = this.window.innerHeight - 115 - 84.8;

    this.c_height = height + "px";

    if (this.window.innerWidth >= 992){
      var height = this.window.innerHeight - 115 - 84.8;
    }else{
      var height = this.window.innerHeight - 83 - 84.8;
    }
  }

  set_values(fragment){

    if (fragment == "blogs"){
      this.banner_opacity = 0;
      this.content = 0;

      setTimeout(() => {
        this.blogs_text_style =  "block";
        this.news_text_style =  "none";
        this.content = 1;
        this.banner_image = "assets/images/blogs_banner.jpg";
        this.banner_opacity = 1;
      },500);

      if (this.window.innerWidth >= 992){
        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2vw",
          "color": "#7E8890"
        };

        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "1.3vw",
          "color": "#BABABA"
        };
      }else{

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "4.5vw",
          "color": "#7E8890"
        };

        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2.8vw",
          "color": "#BABABA"
        };
      }

    }else if (fragment == "news"){
      this.banner_opacity = 0;
      this.content = 0;

      setTimeout(() => {
        this.news_text_style =  "block";
        this.blogs_text_style =  "none";
        this.content = 1;
        this.banner_opacity = 1;
        this.banner_image = "assets/images/news_banner.jpg";
      },500);

      if (this.window.innerWidth >= 992){
        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2vw",
          "color": "#7E8890"
        };

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "1.3vw",
          "color": "#BABABA"
        }
      }else{
        this.news_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "4.5vw",
          "color": "#7E8890"
        };

        this.blogs_btn_style = {
          "fontFamily": "Lato-Regular",
          "fontSize": "2.8vw",
          "color": "#BABABA"
        }
      }

    }

    if (this.window.innerWidth >= 992){
      var height = this.window.innerHeight - 115 - 84.8;
    }else{
      var height = this.window.innerHeight - 83 - 84.8;
    }

    this.c_height = height + "px";
  }

}
