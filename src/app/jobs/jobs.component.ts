import { ElementRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  careers = [];
  careers_index = 0;
  related = [];
  no_job_bool = false;

  constructor(private element: ElementRef, private router: Router, private jobs: JobsServiceService) {
    this.careers = this.jobs.careers;
    const tree = this.router.parseUrl(this.router.url);

    if(tree.fragment == "" || tree.fragment == null){
      this.no_job();
    }else{
      for(var i = 0; i < this.careers.length; i++){
        if(this.careers[i].Reference == tree.fragment){
          window.scrollTo(0,0);
          this.no_job_bool = false;
          this.careers_index = i;
          this.related = [];
          if(this.careers.length != 1){
            if(i == 0){
              this.related.push(this.careers.length - 1);
            }else{
              this.related.push(i - 1);
            }

            if(this.careers.length != 2){
              if(i == this.careers.length - 1){
                this.related.push(0);
              }else{
                this.related.push(i + 1);
              }
            }
          }
          break;
        }
      }

      if(i == this.careers.length){
        this.no_job();
      }
    }
  }

  ngOnInit() {
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        window.scrollTo(0,0);
        const tree = this.router.parseUrl(this.router.url);

        if(tree.fragment == "" || tree.fragment == null){
          this.no_job();
        }else{
          for(var i = 0; i < this.careers.length; i++){
            if(this.careers[i].Reference == tree.fragment){
              this.no_job_bool = false;
              this.careers_index = i;
              this.related = [];
              if(this.careers.length != 1){
                if(i == 0){
                  this.related.push(this.careers.length - 1);
                }else{
                  this.related.push(i - 1);
                }

                if(this.careers.length != 2){
                  if(i == this.careers.length - 1){
                    this.related.push(0);
                  }else{
                    this.related.push(i + 1);
                  }
                }
              }
              break;
            }
          }

          if(i == this.careers.length){
            this.no_job();
          }
        }
      }
    });
  }

  no_job(){
    this.no_job_bool = true;
  }
}
