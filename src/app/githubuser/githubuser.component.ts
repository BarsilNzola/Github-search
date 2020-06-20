import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username/username.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.css']
})
export class GithubuserComponent implements OnInit {
  user: User;
  repos: any;
  searchedUser: string;

  constructor(private UsernameService:UsernameService) { }
    getUserBy(username){
      this.UsernameService.searchUserName(username).then(
        (success) => {
          this.user = this.UsernameService.user;
        },
        (error) => {
          console.log(error)
        }
      );
      this.UsernameService.getUserRepos(username).then(
        (success) => {
          this.repos = this.UsernameService.userRepo;
          console.log(this.repos)
        },
        (error) => {
          console.log(error);
        }
      );
    }

    submitUserName(){
      this.getUserBy(this.searchedUser)
    }
  ngOnInit(): void {

  }

}
