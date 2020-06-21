import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username/username.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-githubrepos',
  templateUrl: './githubrepos.component.html',
  styleUrls: ['./githubrepos.component.css']
})
export class GithubreposComponent implements OnInit {
  user: User;
  repository: Repository;
  repos: any;
  searchedRepo: string;

  constructor(private usernameService:UsernameService) { }
    getRepoBy(reponame){
      this.usernameService.getRepos(reponame).then(
        (success) => {
          this.repos = this.usernameService.newRepo.items;
          console.log(this.repos)
        },
        (error) => {
          console.log(error);
        }
      );
    }
    submitRepo(){
      this.getRepoBy(this.searchedRepo)
    }

  ngOnInit(): void {
  }

}
