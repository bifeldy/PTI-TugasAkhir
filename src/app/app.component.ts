import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PelayanService } from './_pelayan/pelayan.service';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  currentUser: User;

  public githubLastCommit = {
    "sha": "",
    "node_id": "",
    "commit": {},
    "url": "",
    "html_url": "",
    "comments_url": "",
    "author": {},
    "committer": {},
    "parents": [],
    "stats": {},
    "files": []
  };

  constructor(
    private _pelayanService: PelayanService,
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {
    this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this._pelayanService.githubLastCommit()
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              this.githubLastCommit = data;
            }
          },
          err => {
            console.log(err.message);
          }
        );
        this._pelayanService.loadScriptTEXT(`
          let sidebarMenuClick = document.getElementById('navbar');
          let sidebarMenu = document.getElementById('navbar').getElementsByTagName('a');
          sidebarMenuClick.addEventListener("click", event => {
            if(window.innerWidth <= 768 || window.OuterWidth <= 768) {
              mobileShowHide();
            }
          }, false);
        `);
  }

  pencarian(query: string){
    // Belum Bisa Search .. Wkwkwk~
  }

}