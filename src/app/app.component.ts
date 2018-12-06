import { Component } from '@angular/core';
import { PelayanService } from './_pelayan/pelayan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public websiteData = {
    "websiteTitle": "",
    "sudahLogin": false
  };
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

  constructor(private _pelayanService: PelayanService) { }

  ngOnInit() {
    this.websiteData = this._pelayanService.getWesiteData();
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
  }

  pencarian(query: string){
    // Belum Bisa Search .. Wkwkwk~
  }

}