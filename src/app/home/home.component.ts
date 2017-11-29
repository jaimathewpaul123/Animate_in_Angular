import { ElementRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  footer_icons = [
    {
      "icon": "assets/images/icons/facebook_white.png",
      "link": "https://www.facebook.com/farmkartofficial/"
    },
    {
      "icon": "assets/images/icons/insta_white.png",
      "link": "https://www.instagram.com/farmkart/"
    },
    {
      "icon": "assets/images/icons/linkedin_white.png",
      "link": "https://www.linkedin.com/company/farmkart"
    },
    {
      "icon": "assets/images/icons/twitter_white.png",
      "link": "https://twitter.com/farmkart"
    }
  ];

  image_bank = [
    "/assets/images/home_page_poster1.jpg",
    "/assets/images/home_page_poster2.jpg",
    "/assets/images/home_page_poster3.jpg"
  ];

  image_index = 0;
  change_img_timer: Observable<number>;
  private change_img_subscription;
  change_img_time = 12000;
  sticky = true;


  timer: Observable<number>;
  private subscription;

  one_line = [
    "Transforming Farming With Technological Innovation",
    "Designing A Smarter Future Of Farming",
    "Reinventing Agriculture For The Betterment Of Today And Tomorrow"
  ];
  content = [
    "We develop innovative solutions that will radically change traditional agricultural methods. We’re advancing one of the world’s oldest professions, bringing it into the 21st century and taking it beyond.",
    "We’re paving the way for a better farming experience in India by democratizing access to modern agricultural inputs. We want to provide every farmer in the country with leading products and game-changing technologies.",
    "At Farmkart, we want to drive innovation, make an impact, and become an inspiration. We’re improving the daily lives of farmers in India, allowing them to be more productive, efficient, and forward-thinking."
  ];

  btn_width = (100/this.one_line.length) - 4 + "%";

  one_line_text = "";
  content_text = "";

  coming_soon_shown = "";
  coming_soon_hidden = "Coming&nbsp;Soon...";
  text_renew_time = 450;

  pos_timer: Observable<number>;
  private pos_subscription;
  orig_position = -8;
  movement_time = 1000;
  total_frame_move = 12000;

  pos_1 = 0;
  pos_2 = 100;

  text_ctr = 0;
  btn_ctr = 0;

  constructor(private element: ElementRef) {
    this.timer = Observable.timer(0,this.text_renew_time);
    this.subscription = this.timer.subscribe(t=>this.change_text(t));
    this.pos_timer = Observable.timer(0,this.movement_time);
    this.pos_subscription = this.pos_timer.subscribe(t=>this.moving_bg(t));
  }

  ngOnInit() {
    var poster1 = this.element.nativeElement.querySelector('#poster_sticky');
    var poster2 = this.element.nativeElement.querySelector('#poster_faded');

    poster1.style.backgroundImage = "url(" + this.image_bank[this.image_index] + ")";
    poster2.style.backgroundImage = "url(" + this.image_bank[this.image_index + 1] + ")";

    poster1.styletransform = "translateX(0%) translateY(0%)";
    poster2.styletransform = "translateX(-10%) translateY(-10%)";

    setTimeout(() => {
      poster1.style.transform = "translateX(-10%) translateY(-10%)";
      poster2.style.transform = "translateX(-10%) translateY(-10%)";
    },100);

    this.one_line_text = this.one_line[this.text_ctr];
    this.content_text = this.content[this.text_ctr];

    this.image_index++;
    this.text_ctr++;

  }

  change_text(t){
    if (this.coming_soon_hidden.length == 0){
      this.coming_soon_hidden = this.coming_soon_shown;
      this.coming_soon_shown = "";
    }else{
      if(this.coming_soon_hidden.length == 13){
        this.coming_soon_shown += this.coming_soon_hidden.slice(0, 6);
        this.coming_soon_hidden = this.coming_soon_hidden.slice(6, this.coming_soon_hidden.length);
      }
      this.coming_soon_shown += this.coming_soon_hidden[0];
      this.coming_soon_hidden = this.coming_soon_hidden.slice(1, this.coming_soon_hidden.length);
    }
  }

  change_text_on_show(index){
    if (this.btn_ctr >= this.one_line.length){
      var text_1 = this.element.nativeElement.querySelector('.one_liner');
      var text_2 = this.element.nativeElement.querySelector('.content');

      text_1.style.opacity = 0;
      text_2.style.opacity = 0;
      setTimeout(() => {
        this.one_line_text = this.one_line[index];
        this.content_text = this.content[index];
        text_1.style.opacity = 1;
        text_2.style.opacity = 1;
      },1000);
    }
  }

  moving_bg(t){

    var poster1 = this.element.nativeElement.querySelector('#poster_sticky');
    var poster2 = this.element.nativeElement.querySelector('#poster_faded');

    var text_1 = this.element.nativeElement.querySelector('.one_liner');
    var text_2 = this.element.nativeElement.querySelector('.content');

    var value = t%9;

    if (value == 8){
      this.sticky = !this.sticky;
    }

    if (!this.sticky && value == 7){
      if (this.btn_ctr < this.one_line.length){
        text_1.style.opacity = 0;
        text_2.style.opacity = 0;
        setTimeout(() => {
          this.one_line_text = this.one_line[this.text_ctr];
          this.content_text = this.content[this.text_ctr];
          text_1.style.opacity = 1;
          text_2.style.opacity = 1;
          this.text_ctr++;
          if (this.text_ctr == this.one_line.length){
            this.text_ctr = 0;
          }
        },1000);
      }

      this.image_index++;
      if(this.image_index == this.image_bank.length){
        this.image_index = 0;
      }

      poster1.style.opacity = 1;
      poster2.style.opacity = 0;
      poster1.style.transition = "opacity 2000ms ease-in-out, transform 10000ms linear";
      poster1.style.transform = "translateX(-10%) translateY(-10%)";

      setTimeout(() => {
        poster2.style.backgroundImage = "url(" + this.image_bank[this.image_index] + ")";
        poster2.style.transition = "opacity 2000ms ease-in-out";
        poster2.style.transform = "translateX(-10%) translateY(-10%)";
      },2000);
    }else if(this.sticky && value == 7){
      if (this.btn_ctr < this.one_line.length){
        text_1.style.opacity = 0;
        text_2.style.opacity = 0;
        setTimeout(() => {
          this.one_line_text = this.one_line[this.text_ctr];
          this.content_text = this.content[this.text_ctr];
          text_1.style.opacity = 1;
          text_2.style.opacity = 1;
          this.text_ctr++;
          if (this.text_ctr == this.one_line.length){
            this.text_ctr = 0;
          }
        },1000);
      }

      this.image_index++;
      if(this.image_index == this.image_bank.length){
        this.image_index = 0;
      }

      poster1.style.opacity = 0;
      poster2.style.opacity = 1;
      poster2.style.transition = "opacity 2000ms ease-in-out, transform 10000ms linear";
      poster2.style.transform = "translateX(0%) translateY(0%)";

      setTimeout(() => {
        poster1.style.backgroundImage = "url(" + this.image_bank[this.image_index] + ")";
        poster1.style.transition = "opacity 2000ms ease-in-out";
        poster1.style.transform = "translateX(0%) translateY(0%)";
      },2000);
    }

    if (this.btn_ctr < this.one_line.length){
      var btn_id = "#btn_content_" + this.btn_ctr;
      var btn = this.element.nativeElement.querySelector(btn_id);


      if (value == 0){
        btn.style.width = "100%";
      }

      if (value == 7){
        this.btn_ctr++;
      }
    }
  }

}
