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

    submitUserName(){
      this.getUserBy(this.searchedUser)
    }
  ngOnInit(): void {
    this.getUserBy("BarsilNzola")

  }

}
