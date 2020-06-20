import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubuserComponent } from './githubuser/githubuser.component';
import { GithubreposComponent } from './githubrepos/githubrepos.component';


const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'githubuser', component: GithubuserComponent},
  { path: 'gitubrepos', component: GithubreposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
