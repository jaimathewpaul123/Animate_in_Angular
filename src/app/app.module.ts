import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WindowRef } from './window.service';
import { PipeService } from './pipe.service';
import { BlogsContentService } from './blogs-content.service';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { PartnersComponent } from './partners/partners.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgmCoreModule } from '@agm/core';
import { BlogsComponent } from './blogs/blogs.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsServiceService } from './jobs-service.service';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'our-network', component: PartnersComponent },
  { path: 'careers', component: ConnectComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    NewsroomComponent,
    PartnersComponent,
    ConnectComponent,
    ContactUsComponent,
    BlogsComponent,
    JobsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvWgjz6VmmH5W_D9cPfZEGuy1676rW16A'
    })
  ],
  providers: [WindowRef, PipeService, BlogsContentService, JobsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
