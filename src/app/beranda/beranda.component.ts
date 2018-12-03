import { Component, OnInit } from '@angular/core';
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

  constructor(private _pelayanService: PelayanService) { }

  ngOnInit() {
    this.websiteData = this._pelayanService.getWesiteData();
    this._pelayanService.getPengumumanHome()
        .subscribe(
          data => {
            if(data.length > 0) {
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
            if(data.length > 0 && data !== null && data !== undefined) {
              this.diskusiData = data.reverse();
            }
          },
          err => {
            console.log(err.message);
          }
        );
  }

}
