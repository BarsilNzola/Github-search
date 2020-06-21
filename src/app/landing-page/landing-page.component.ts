import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { UsernameService } from '../username/username.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user: User;
  repos: any;
  searchedUser: string;

  constructor(private usernameService:UsernameService) { }
    getUserBy(username){
      this.usernameService.searchUserName(username).then(
        (success) => {
          this.user = this.usernameService.newUser;
        },
        (error) => {
          console.log(error)
        }
      );
      this.usernameService.getUserRepos(username).then(
        (success) => {
          this.repos = this.usernameService.userRepo;
          console.log(this.repos)
        },
        (error) => {
          console.log(error);
        }
      );
    }

  ngOnInit(): void {
    this.getUserBy("BarsilNzola")

  }

}
