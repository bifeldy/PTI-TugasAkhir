import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-rilisan',
  templateUrl: './rilisan.component.html',
  styleUrls: ['./rilisan.component.css']
})
export class RilisanComponent implements OnInit {

  public pageNumber;
  public websiteData = {};
  public rilisanData = {};

  constructor(private _pelayanService: PelayanService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Listening URL Terus
    this._route.paramMap.subscribe((params: ParamMap) => {
      // Ambil ID Dari URL
      this.pageNumber = parseInt(params.get('id'));
      if(this.pageNumber <= 0){
        this.pageNumber = 1;
        this._router.navigate(['../', this.pageNumber], {
          relativeTo: this._route
        });
      }
      // Ambil Website Data
      this.websiteData = this._pelayanService.getWesiteData();
      // Ambil Data Rilisan
      this._pelayanService.getRilisan(this.pageNumber)
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
    });
    // Sekali Ini Tidak Listening URL
  }

  rilisanPreviousPage() {
    this.pageNumber = this.pageNumber - 1 <= 0 ? 1 : this.pageNumber - 1;
    this._router.navigate(['../', this.pageNumber], {
      relativeTo: this._route
    });
  }

  rilisanNextPage(total_pages: number) {
    this.pageNumber = this.pageNumber + 1 >= total_pages ? total_pages : this.pageNumber + 1;
    this._router.navigate(['../', this.pageNumber], {
      relativeTo: this._route
    });
  }

}
