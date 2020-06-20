import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubuserComponent } from './githubuser/githubuser.component';


const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'githubuser', component: GithubuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
