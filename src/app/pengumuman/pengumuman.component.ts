import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-pengumuman',
  templateUrl: './pengumuman.component.html',
  styleUrls: ['./pengumuman.component.css']
})
export class PengumumanComponent implements OnInit {

  public websiteData = {};
  public pengumumanData = [{
    "id": 0,
    "img": ["/assets/img/404_0.svg", "404."],
    "title": "Tidak Ada Data.",
    "content": "Tidak Ada Data Yang Bisa Ditampilkan.",
    "calendar": ["31/12/1970", "22:53"],
    "comment": -1,
    "tags": ["Null"],
    "user": ["admin", "Administrator"]
  }];

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.websiteData = this._pelayanService.getWesiteData();
    this._pelayanService.getPengumumanHome()
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              if(data.length <= 0) return;
              this.pengumumanData = data.reverse();
            }
          },
          err => {
            console.log(err.message);
          }
        );
  }

}
