import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-pengumuman-detail',
  templateUrl: './pengumuman-detail.component.html',
  styleUrls: ['./pengumuman-detail.component.css']
})
export class PengumumanDetailComponent implements OnInit {

  public pengumumanId: number;
  public pengumumanData = {
    "id": 0,
    "img": ["/assets/img/404_0.svg", "404."],
    "title": "Tidak Ada Data.",
    "content": "Tidak Ada Data Yang Bisa Ditampilkan.",
    "calendar": ["31/12/1970", "22:53"],
    "comment": -1,
    "tags": ["Null"],
    "user": ["admin", "Administrator"]
  };

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.pengumumanId = parseInt(this._route.snapshot.paramMap.get('id'));
    if(this.pengumumanId <= 0){
      this.pengumumanId = 1;
      this._router.navigate(['../', this.pengumumanId], {
        relativeTo: this._route
      });
    }
    this._pelayanService.getPengumumanHome()
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              if(data.length <= 0) return;
              for(let i = 0; i<data.length; i++) {
                  if(this.pengumumanId == data[i].id) {
                    this.pengumumanData = data[i];
                  }
              }
            }
          },
          err => {
            console.log(err.message);
          }
        );
  }

}
