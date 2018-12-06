import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-rilisan-detail',
  templateUrl: './rilisan-detail.component.html',
  styleUrls: ['./rilisan-detail.component.css']
})
export class RilisanDetailComponent implements OnInit {

  public websiteData = {};
  public dataId: number;
  public detailData = {};

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.dataId = parseInt(this._route.snapshot.paramMap.get('id'));
    if(this.dataId <= 0){
      this.dataId = 1;
      this._router.navigate(['../', this.dataId], {
        relativeTo: this._route
      });
    }
    // Ambil Website Data
    this.websiteData = this._pelayanService.getWesiteData();
    this._pelayanService.getRilisanDetail(this.dataId)
        .subscribe(
          data => {
            if(data !== null && data !== undefined) {
              if(data.length <= 0) return;
              this.detailData = data;
              console.log(this.detailData);
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
