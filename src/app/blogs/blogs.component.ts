import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BlogsContentService } from '../blogs-content.service';
import { WindowRef } from '../window.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  host: {'(window:scroll)': 'change_poster_appearance($event)'}
})
export class BlogsComponent implements OnInit {

  window: Window;

  blogs = [];

  full_blog = false;

  blog_index = 0;

  related = [];

  loc = "http://www.farmkart.com/blogs%23";

  fb_links = [];

  change_poster_appearance(event){
    if(this.full_blog){
      var container = this.element.nativeElement.querySelector('#overlay_top');
      var img = this.element.nativeElement.querySelector('.banner_image');

      var min = .45;
      var max = .75;

      var min_scale = 1;
      var max_scale = 1.25;

      var mult = currentYPosition()/460;

      if (currentYPosition() <= 460){
        var val = ((max - min)*mult) + min;
        container.style.background = "rgba(0,0,0," + val + ")";
        var val = ((max_scale - min_scale)*mult) + min_scale;
        img.style.transform = "scale(" + val + "," + val + ")";
      }
    }
  }

  constructor(private element: ElementRef, private router: Router, private win: WindowRef, private blog: BlogsContentService) {
    this.window = win.nativeWindow;
    this.blogs = this.blog.blogs;
    const tree = this.router.parseUrl(this.router.url);

    for(var i = 0; i < this.blogs.length; i++){
      this.fb_links.push("https://www.facebook.com/sharer/sharer.php?u=https://farmkart.com/blogs%23" + this.blogs[i].reference + "&quote=" + this.blogs[i].links.facebook_quote);
    }
    if(tree.fragment == "" || tree.fragment == null){
      this.full_blog = false;
    }else{
      for(var i = 0; i < this.blogs.length; i++){
        if(this.blogs[i].reference == tree.fragment){
          this.blog_index = i;
          this.full_blog = true;
          this.related = [];
          if(this.blogs.length != 1){
            if(i == 0){
              this.related.push(this.blogs.length - 1);
            }else{
              this.related.push(i - 1);
            }

            if(this.blogs.length != 2){
              if(i == this.blogs.length - 1){
                this.related.push(0);
              }else{
                this.related.push(i + 1);
              }
            }
          }
          break;
        }
      }

      if(i == this.blogs.length){
        this.full_blog = false;
      }


      setTimeout(() => {
        var banner = this.element.nativeElement.querySelector('.banner_image');
        banner.style.backgroundImage = "url(" + this.blogs[this.blog_index].img_banner + ")";
      }, 10)

    }
  }

  ngOnInit() {
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        window.scrollTo(0,0);
        const tree = this.router.parseUrl(this.router.url);
        if(tree.fragment == "" || tree.fragment == null){
          this.full_blog = false;
        }else{
          for(var i = 0; i < this.blogs.length; i++){
            if(this.blogs[i].reference == tree.fragment){
              window.scrollTo(0,0);
              this.blog_index = i;
              this.full_blog = true;
              this.related = [];
              if(this.blogs.length != 1){
                if(i == 0){
                  this.related.push(this.blogs.length - 1);
                }else{
                  this.related.push(i - 1);
                }

                if(this.blogs.length != 2){
                  if(i == this.blogs.length - 1){
                    this.related.push(0);
                  }else{
                    this.related.push(i + 1);
                  }
                }
              }
              break;
            }
          }

          if(i == this.blogs.length){
            this.full_blog = false;
          }
          setTimeout(() => {
            var banner = this.element.nativeElement.querySelector('.banner_image');
            banner.style.backgroundImage = "url(" + this.blogs[this.blog_index].img_banner + ")";
          }, 10);

        }
      }
    });
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
