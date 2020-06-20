import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user'
import { Repository } from '../repository'


@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  newUser: User
  userRepo: Repository;
  newRepo: any;

  private token = environment.token;
  constructor(private http:HttpClient) { }

  searchUserName(user:string){
    interface ApiResponse {
      login: string,
      name: string,
      avatar_url: string,
      location: string,
      html_url: string,
      repos: number,
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/${username}?access_token=${this.token}')
      .toPromise().then(
        (results) => {
          this.newUser = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
    return promise
  }

  getUserRepos(username:string){
    interface ApiResponse {
      name: string,
      description: string,
      html_url: string,
      language: string,
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/${username}/repos?access_token=${this.token}')
      .toPromise().then(
        (results) => {
          this.userRepo = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
    return promise
  }
}
