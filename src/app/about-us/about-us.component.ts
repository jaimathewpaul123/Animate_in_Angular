import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  host: {'(window:scroll)': 'change_poster_appearance($event)'}
})
export class AboutUsComponent implements OnInit {

  grid = [
    "assets/images/collage/1.jpg",
    "assets/images/collage/2.jpg",
    "assets/images/collage/3.jpg",
    "assets/images/collage/4.jpg",
    "assets/images/collage/5.jpg",
    "assets/images/collage/6.jpg",
    "assets/images/collage/7.jpg",
    "assets/images/collage/8.jpg",
  ];

  top_text = "Farmkart offers a wide range of products & services to transform your agricultural practices.";

  bottom_text = "Featured offerings coming early 2018";

  mission1 = "To design technology-driven solutions that make agricultural inputs more affordable and accessible for all. We’re developing the next generation of farmers by updating the methods and processes used throughout India, resulting in a more fruitful and lucrative industry."

  vision1 = "To achieve sustainable growth within India’s agricultural industry by simplifying the everyday lives of farmers throughout the country. We improve the quality of life for farmers throughout India by providing the technological infrastructure necessary to create the smarter future of farming."

  message = "At Farmkart, our mission is to help develop the next generation of farmers and agripreneurs, and we are delighted that you are interested in learning more about our journey. We are working toward establishing a digital transformation in Indian agriculture in order to bring about a paradigm shift - and we can’t do this alone. We know that in order to establish and maintain sustainable growth, we require the support of our community.<br><br>Our team is driven by a passion to elevate the farming experience across India by introducing modern technology, more effective methods, and advanced tools. We want to breed the next generation of agripreneurs, and we know that strategic partners, customers, and consumers will all play a critical role in doing this. It’s truly amazing what can happen when change-makers come together to transform one of the longest-lasting industries in the world.<br><br>Right now, we are standing on the shores of an ocean of opportunity in agricultural innovation, and we are determined to become a key player in designing the farm of tomorrow. It’s an exciting time in agri-tech, and we can’t wait to show you what we have in store.";

  story = "Our objective is, and always has been, to make farming materials more affordable and accessible - especially for those living in remote communities. We were founded on a dream to improve the quality of life for farmers in India, and a hope to make a sustainable and revolutionary change in the agriculture industry.<br><br>We want to drive fundamental change for farmers - and this begins with rethinking the existing methods of both production and delivery. We plan to democratize access to modern agricultural inputs - like equipment, fertilizer, pesticides, and seeds - thereby transforming the way the Indian agricultural industry functions and ultimately thrives.<br><br>We are innovative, tech-focused dreamers with a desire to be pioneers in this space. We want to drive innovation, make an impact, and become an inspiration. With a lot of hard work and a little bit of luck, we can achieve Vision 2022 and help Indian farmers earn twice of what they’re earning today.";

  images_orig = [
    "assets/images/members/member_1.jpg",
    "assets/images/members/member_2.jpg",
    "assets/images/members/member_3.jpg",
    "assets/images/members/member_4.jpg",
    "assets/images/members/member_5.jpg",
    "assets/images/members/member_6.jpg",
    "assets/images/members/member_7.jpg",
    "assets/images/members/member_8.jpg",
    "assets/images/members/member_9.jpg",
    "assets/images/members/member_10.jpg",
  ];

  team_members_r1 = [
    {
      "image": "assets/images/members/member_1.jpg",
      "image_bio": "assets/images/members/member_1_bio.jpg",
      "name": "Atul Patidar",
      "position": "CEO & Founder",
      "biography": "As the CEO of Farmkart, Atul is responsible for running all facets of business. Atul is a maker, innovator, and technophile with a passion for developing pristine, powerful, and profitable technical solutions to fulfill end user needs. He takes a comprehensive approach to product development and believes in transforming creative ideas into innovative realities leading to successful startups in technology industry. He has designed 15+ products for Fortune-500 companies at one of top consulting firms in Toronto. He has led various product development projects collaborating with cross-functional teams involving hardware, software and design. <br><br>He holds a Masters in Electronics Engineering with management education in Entrepreneurship, Leadership, Innovation and Technology from the University of Toronto."
    },
    {
      "image": "assets/images/members/member_2.jpg",
      "image_bio": "assets/images/members/member_2_bio.jpg",
      "name": "Anup Mandloi",
      "position": "Chief Operating Officer",
      "biography": "Anup has over two decades of expertise in building successful businesses in various industries such as real-estate, hospitality, education and agriculture. He is in the Board of Directors for Reva Flora, Aditi Hospitality, Paramount Academy, Reva Infra Estate Developers and Him Infrastructure. With his consumer focused approach and soft skills, he has managed to derive tricks of cost-efficiency and effective operations. Working to create a massive impact on the agri-tech market and lives of the farmers, Anup is ready to lead Farmkart and contribute to the growth of smart future of farming."
    },
    {
      "image": "assets/images/members/member_3.jpg",
      "image_bio": "assets/images/members/member_3_bio.jpg",
      "name": "Ishwar Patidar",
      "position": "Chairman & Head - Store Operations & Logistics",
      "biography": "Ishwar has been into the agro-trading industry since the past two decades. A massive player in the trading industry, he knows the nits and bits of market growth. He is highly acclaimed business artist with more than 15 years of experience across multiple industries and is a recognized entrepreneur for his various successful business ventures. An eminent member on Board of Directors for Satkar Industries, Ishu Trading, and Saket International; he is now venturing into the modern logistics in agriculture and technology and plans to put in his years of experience to maximise profitability."
    },
    {
      "image": "assets/images/members/member_4.jpg",
      "image_bio": "assets/images/members/member_4_bio.jpg",
      "name": "Mohan Patidar",
      "position": "Head, Finance",
      "biography": "A Chartered Accountant by profession, Mohan is the money maker and money manager. He has been in the finance industry since more than a decade and has a fantastic grip over laws and policies. He holds a Masters in Commerce and prefers to stay up to date with the economical changes. He manages all the finances for Farmkart and keeps his focus on wealth maximisation."
    },
    {
      "image": "assets/images/members/member_5.jpg",
      "image_bio": "assets/images/members/member_5_bio.jpg",
      "name": "Atul Kapile",
      "position": "Head, Market Research",
      "biography": "Analyst, Dreamer, & Minimalist<br><br>Atul is the uber-cool curious marketing geek who loves puzzles. Nothing else exhilarates him more than finding simple solutions to complex problems. That’s the best thing being a Market Researcher – it’s all about observing, understanding, and finding solutions to challenges faced by consumers. He is passionate about data research and spends most of his time going through spreadsheets and preparing insightful presentations. He helps companies to build products and brands by converting research findings into actionable insights.<br><br>When he is not juggling with data, graphs, and charts, he loves reading mystery novels, science-fiction books, watching documentaries, and learning new things. Currently, he is channeling his inner Lennon while learning piano."
    }
  ];

  team_members_r2 = [
    {
      "image": "assets/images/members/member_6.jpg",
      "image_bio": "assets/images/members/member_6_bio.jpg",
      "name": "Sidharth Jain",
      "position": "Head, Software Development",
      "biography": "Sidharth is an intrapreneur and a thriving entrepreneur.He enjoys finding new growth hacks and solving the technical problems. A graduate in Computer Science from Mumbai University, he worked with Accenture to gain a firsthand experience of leading technologies like React.js, Angular.js, Node.js, and MongoDB.<br><br>After a prolific stint at Accenture, he ventured into technology innovation space and developed exciting user-friendly tech products for multinational companies, where he led and mentored the software development team and provided breakthrough solutions to clients.<br><br>Sidharth is a jack of all trades, mastering all, and gladly succeeding at that."
    },
    {
      "image": "assets/images/members/member_7.jpg",
      "image_bio": "assets/images/members/member_7_bio.jpg",
      "name": "Shreesha Jagadeesh",
      "position": "Head, Data Analytics",
      "biography": "Shreesha is an expert in Data Science. Previously, he worked at ChipCare Corp as an Engineer where he built 12 diagnostic imaging prototypes. He is passionate about Artificial Intelligence and has executed Analytics projects using Python, Spark, Scala and AWS.<br><br>He holds a Masters degree from University of Toronto, Canada in Electrical & Computer Engineering. He enjoys working out at the gym, playing table-tennis, squash, and badminton, when he is not hustling with the technology."
    },
    {
      "image": "assets/images/members/member_8.jpg",
      "image_bio": "assets/images/members/member_8_bio.jpg",
      "name": "Kym Derrick Uy",
      "position": "Project Director, Software Engineering",
      "biography": "Kym enjoys creating modules, systems, and jigs in order to automate multiple tasks. Being a profound programmer in a variety of languages, and familiarizing oneself of various algorithms helped him to engage in multiple varying projects.<br><br>He has an experience in front-end, back-end development which materialized itself in the form of websites (www.jaxoftrades.com), mobile applications (Ellie), and specialized softwares. Having a good foundation in C and OOP helped to make him a very flexible programmer.<br><br>Currently, he is taking up a master’s program in Electrical and Computer Engineering at University of Toronto specializing in biophotonics applications."
    },
    {
      "image": "assets/images/members/member_9.jpg",
      "image_bio": "assets/images/members/member_9_bio.jpg",
      "name": "Rony Stephen",
      "position": "Project Director, UI/UX",
      "biography": "Rony is a designing ninja with more than two years of experimenting with UX and UI. He swears by designs that are neat, minimalistic, and pleasing. Before juggling with Farmkart, he was doing his thing as a Product Designer at jaxoftrades.com. He holds a Bachelor's degree in Computer Applications and a Post Graduate Diploma in Mobile applications."
    },
    {
      "image": "assets/images/members/member_10.jpg",
      "image_bio": "assets/images/members/member_10_bio.jpg",
      "name": "Ashish Das",
      "position": "Project Director, Software Engineering",
      "biography": "Ashish completed his Masters in Electrical and Computer Engineering from Queen’s University, Canada. A hands-on Software Developer with more than 2 years of application design, development, and support experience, his experience has lent him business skills, management chops, and an ability to work successfully with different personalities, customers, and end-users.<br><br>When he is not being a jack of all trades, he loves to watch soccer. Lionel Messi is his God, and sketching and photography keep him elated. He loves meeting new people over a cup of coffee and streams of stories."
    }
  ];

  active_image_bio =  this.team_members_r1[0].image_bio;
  active_name_bio =  this.team_members_r1[0].name;
  active_position_bio =  this.team_members_r1[0].position;
  active_biography_bio =  this.team_members_r1[0].biography;

  current_index = 10;

  min_height = 0;

  constructor(private element: ElementRef, private router: Router) {
    window.scrollTo(0,0);
  }

  ngOnInit(){
    window.scrollTo(0,0);
  }

  change_poster_appearance(event){
    var container = this.element.nativeElement.querySelector('#overlay_top');
    var text = this.element.nativeElement.querySelector('#text_top');
    var img = this.element.nativeElement.querySelector('#poster_1');

    var min = .45;
    var max = .75;

    var min_scale = 1;
    var max_scale = 1.25;

    var mult = currentYPosition()/460;

    if (currentYPosition() <= 460){
      img.style.display = "block";
      container.style.display = "block";
      text.style.display = "block";
      var val = ((max - min)*mult) + min;
      container.style.background = "rgba(0,0,0," + val + ")";
      var val = 1 - mult;
      text.style.opacity = val;
      var val = ((max_scale - min_scale)*mult) + min_scale;
      img.style.transform = "scale(" + val + "," + val + ")";
    }else{
      img.style.display = "none";
      text.style.display = "none";
      container.style.display = "none";
    }
  }

  stop_propagation(event){
    event.stopPropagation();
  }

  active_bio_change(event, index){
    this.stop_propagation(event);

    var container = this.element.nativeElement.querySelector('#bio_container');
    var image = this.element.nativeElement.querySelector('#image_bio');

    if (this.current_index == index){
      this.close_bio();
      return;
    }

    this.current_index = index;

    if(container.offsetHeight == 0){
      if(index < 5){
        this.active_image_bio =  this.team_members_r1[index].image_bio;
        this.active_name_bio =  this.team_members_r1[index].name;
        this.active_position_bio =  this.team_members_r1[index].position;
        this.active_biography_bio =  this.team_members_r1[index].biography;
      }else{
        index -= 5;
        this.active_image_bio =  this.team_members_r2[index].image_bio;
        this.active_name_bio =  this.team_members_r2[index].name;
        this.active_position_bio =  this.team_members_r2[index].position;
        this.active_biography_bio =  this.team_members_r2[index].biography;
      }

      setTimeout(() => {
        if(container.style.height == image.offsetHeight + "px"){
          container.style.maxHeight = "700px";
        }
      }, 1001);

      container.style.maxHeight = "700px";
    }else{
      container.style.opacity = 0;
      setTimeout(() => {

        if(index < 5){
          this.active_image_bio =  this.team_members_r1[index].image_bio;
          this.active_name_bio =  this.team_members_r1[index].name;
          this.active_position_bio =  this.team_members_r1[index].position;
          this.active_biography_bio =  this.team_members_r1[index].biography;
        }else{
          index -= 5;
          this.active_image_bio =  this.team_members_r2[index].image_bio;
          this.active_name_bio =  this.team_members_r2[index].name;
          this.active_position_bio =  this.team_members_r2[index].position;
          this.active_biography_bio =  this.team_members_r2[index].biography;
        }

        container.style.opacity = 1;
      }, 1000);
    }
  }

  close_bio(){
    var container = this.element.nativeElement.querySelector('#bio_container');

    if(container.style.height == "auto"){
      container.style.maxHeight = "0px";
    }

    setTimeout(() => {
      container.style.maxHeight = "0px";
    },1);

    this.current_index = 10;
  }

  change_image_in(i){
    if(i < 5){
      this.team_members_r1[i].image = this.team_members_r1[i].image_bio;
    }else{
      this.team_members_r2[i - 5].image = this.team_members_r2[i - 5].image_bio;
    }
  }

  change_image_out(i){
    if(i < 5){
      this.team_members_r1[i].image = this.images_orig[i];
    }else{
      this.team_members_r2[i - 5].image = this.images_orig[i];
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
