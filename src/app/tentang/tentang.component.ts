import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.component.html',
  styleUrls: ['./tentang.component.css']
})
export class TentangComponent implements OnInit {

  public websiteData = {};
  public tentangData = {
    "sekilasInfo": "",
    "library": [
      {
        "id": 0,
        "img": "/assets/img/404_0.svg",
        "title": "Tidak Ada Data.",
        "content": "Tidak Ada Data Yang Bisa Ditampilkan.",
        "url": "http://www.Bifeldy.tk/"
      }
    ]
  };

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.websiteData = this._pelayanService.getWesiteData();
    this._pelayanService.getAbout()
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              this.tentangData = data;
            }
          },
          err => {
            console.log(err.message);
          }
        );
  }

}
