import { ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
  // host: {'(window:scroll)': 'change_poster_appearance($event)'}
})
export class PartnersComponent implements OnInit {

  partners_content = "Farmkart believes in fruitful alliances that yield better results and enhanced productivity. We have partnered with leading players in technology, innovation, and farming. We are building a strongly associated group that is passionate to achieve a common goal.We have teamed up with biggest groups and associations that assure growth and innovation further."
  partners_content2 = "Farmkart thrives on its team and associates. We brought the best of the industry together to provide you the most advanced solutions and services."

  investment_content = "Farmkart is innovating, developing, and delivering the next<br>generation of agri-tech, and we are committed to generating<br>sustainable profit and value for our stakeholders. We invite<br>you to join us in designing the farm of tomorrow.";

  bottom_text = "Partner With Us";

  bottom_text_content = " To introduce innovation in farming, blend conventional methods with technological revolution, and impact agriculture for sustainable growth and long-term returns.   Farmkart is a one-stop shop for conventional and hi-tech agriculture. Farmkart will change the way farmers think, capitalise on their time, alter the industry methods, and bring an impact that goes beyond everything.  ";

  partners_img = [
    "assets/images/our_network/Partner-1.png",
    "assets/images/our_network/Partner-2.png",
    "assets/images/our_network/Partner-3.png",
    "assets/images/our_network/Partner-4.png",
    "assets/images/our_network/Partner-5.png"
  ];

  board_members = [
    {
      "image": "assets/images/our_network/BOD1.jpg",
      "name": "Ishwar Patidar"
    },
    {
      "image": "assets/images/our_network/BOD2.jpg",
      "name": "Anup Mandloi"
    },
    {
      "image": "assets/images/our_network/BOD3.jpg",
      "name": "Atul Patidar"
    },
    {
      "image": "assets/images/our_network/BOD4.jpg",
      "name": "Sushil Kotwale"
    },
    {
      "image": "assets/images/our_network/BOD5.jpg",
      "name": "Subhash Chand Jain"
    },
    {
      "image": "assets/images/our_network/BOD10.jpg",
      "name": "Praveen Mandloi"
    },
    {
      "image": "assets/images/our_network/BOD6.jpg",
      "name": "Moolchand Patidar"
    },
    {
      "image": "assets/images/our_network/BOD7.jpg",
      "name": "Sidharth Jain"
    },
    {
      "image": "assets/images/our_network/BOD8.jpg",
      "name": "Mohan Patidar"
    },
    {
      "image": "assets/images/our_network/BOD9.jpg",
      "name": "Mahendra Kulkarni"
    }
  ];

  constructor(private element: ElementRef) {
    window.scrollTo(0,0);
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  // change_poster_appearance(event){
  //   var container = this.element.nativeElement.querySelector('#overlay_top');
  //   var img = this.element.nativeElement.querySelector('#poster_1');
  //   var text = this.element.nativeElement.querySelector('#text_top');

  //   var min = .45;
  //   var max = .75;

  //   var min_scale = 1;
  //   var max_scale = 1.25;

  //   var mult = currentYPosition()/460;

  //   if (currentYPosition() <= 460){
  //     img.style.display = "block";
  //     container.style.display = "block";
  //     text.style.display = "block";
  //     var val = ((max - min)*mult) + min;
  //     container.style.background = "rgba(0,0,0," + val + ")";
  //     var val = 1 - mult;
  //     text.style.opacity = val;
  //     var val = ((max_scale - min_scale)*mult) + min_scale;
  //     img.style.transform = "scale(" + val + "," + val + ")";
  //   }else{
  //     img.style.display = "none";
  //     text.style.display = "none";
  //     container.style.display = "none";
  //   }
  // }

}

// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }
