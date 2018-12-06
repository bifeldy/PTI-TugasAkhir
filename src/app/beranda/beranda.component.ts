import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  public websiteData = {
    "websiteTitle": "Misty Chronexial",
    "sudahLogin": false
  };
  public rilisanData = {
    results: [
      {
        poster_path: "",
        adult: false,
        overview: "",
        release_date: "",
        genre_ids: [],
        id: 0,
        original_title: "",
        original_language: "",
        title: "",
        backdrop_path: "",
        popularity: 0,
        vote_count: 0,
        video: false,
        vote_average: 0
      }
    ],
    page: 0,
    total_results: 0,
    dates: {},
    total_pages: 0
  };
  public populerData = {
    results: [
      {
        "poster_path": "",
        "adult": false,
        "overview": "",
        "release_date": "",
        "genre_ids": [],
        "id": 0,
        "original_title": "",
        "original_language": "",
        "title": "",
        "backdrop_path": "",
        "popularity": 0,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
      }
    ],
    page: 0,
    total_results: 0,
    total_pages: 0
  };
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
    this._pelayanService.getRilisan(Math.floor(Math.random() * 50) + 1)
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              this.rilisanData = data;
            }
          },
          err => {
            console.log(err.message);
          }
        );
    this._pelayanService.getPopuler(1)
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              this.populerData = data;
            }
          },
          err => {
            console.log(err.message);
          }
        );
    this._pelayanService.loadScriptTEXT(`
      $('.carousel').flickity({
        "contain": true,
        "freeScroll": true,
        "bgLazyLoad": 4,
        "pageDots": false
      });
    `);
    this._pelayanService.loadScriptTEXT(`
      var close = document.getElementsByClassName("close-button");
      for (var i = 0; i < close.length; i++) {
          close[i].onclick = function(){
              var div = this.parentElement;
              div.style.opacity = "0";
              setTimeout(function(){
                  div.style.display = "none";
                  $(div).remove();
              }, 600);
          }
      }
    `);
  }

}
