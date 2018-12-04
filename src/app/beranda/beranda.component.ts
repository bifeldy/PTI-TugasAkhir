import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

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
  public diskusiData = [{
    "id": 0,
    "img": ["/assets/img/404_1.svg", "404."],
    "title": "Tidak Ada Data.",
    "content": "Tidak Ada Data Yang Bisa Ditampilkan.",
    "calendar": ["31/12/1970", "22:53"],
    "user": ["admin", "Administrator"]
  }];
  public rilisanData = {};

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
    this._pelayanService.getRilisan(Math.floor(Math.random() * 50) + 1  )
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              if(data.length <= 0) return;
              this.rilisanData = data;
            }
          },
          err => {
            console.log(err.message);
          }
        );
    this._pelayanService.loadScriptTEXT(`
      $('.main-carousel').flickity({
        "contain": true,
        "freeScroll": true,
        "bgLazyLoad": 4,
        "pageDots": false
      });
    `);
  }

  openDetails(id: number){
    this._router.navigate(['/details', id], {
      relativeTo: this._route
    });
  }

}
