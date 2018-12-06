import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-diskusi',
  templateUrl: './diskusi.component.html',
  styleUrls: ['./diskusi.component.css']
})
export class DiskusiComponent implements OnInit {

  public websiteData = {};
  public diskusiData = [{
    "id": 0,
    "url": "",
    "img": ["/assets/img/404_1.svg", "404."],
    "title": "Tidak Ada Data.",
    "content": "Tidak Ada Data Yang Bisa Ditampilkan.",
    "calendar": ["31/12/1970", "22:53"],
    "user": ["admin", "Administrator"]
  }];

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.websiteData = this._pelayanService.getWesiteData();
    this._pelayanService.getDiskusiHome()
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              if(data.length <= 0) return;
              this.diskusiData = data.reverse();
            }
          },
          err => {
            console.log(err.message);
          }
        );
  }

}
