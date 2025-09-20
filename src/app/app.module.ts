import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/about/history.component';
import { TeamComponent } from './pages/about/team.component';
import { TermDatesComponent } from './pages/news-events/term-dates.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeesComponent } from './pages/about/fees.component';
import { TestimonialsComponent } from './pages/about/testimonials.component';
import { AttendanceGuidelineComponent } from './pages/news-events/attendance.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/history', component: HistoryComponent },
  { path: 'about/team', component: TeamComponent },
  { path: 'about/fees', component: FeesComponent },
  { path: 'about/testimonials', component: TestimonialsComponent },
  { path: 'news-events/term-dates', component: TermDatesComponent },
  { path: 'news-events/attendance-guideline', component: AttendanceGuidelineComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    TeamComponent,
    TermDatesComponent,
    ContactComponent,
    FeesComponent,
    TestimonialsComponent,
    AttendanceGuidelineComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
