import { Component, OnInit } from '@angular/core';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _pelayanService: PelayanService) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
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
