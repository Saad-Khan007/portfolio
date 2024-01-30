import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './portfolio/profile/profile.component';
import { ProfileListComponent } from './portfolio/profile-list/profile-list.component';
import { ProfileDetailComponent } from './portfolio/profile-detail/profile-detail.component';
import { ResumeComponent } from './navComponents/resume/resume.component';
import { PortfolioComponent } from './navComponents/portfolio/portfolio.component';
import { ContactComponent } from './navComponents/contact/contact.component';
import { AboutComponent } from './navComponents/about/about.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileDetailComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    PortfolioDetailComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    NgCircleProgressModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
