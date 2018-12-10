import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-rilisan',
  templateUrl: './rilisan.component.html',
  styleUrls: ['./rilisan.component.css']
})
export class RilisanComponent implements OnInit {

  public pageNumber: number;
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
  public genreData = {};

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
      // Ambil Data Rilisan
      this._pelayanService.getRilisan(this.pageNumber)
          .subscribe(
            data => {
              if(data !== null && data !== undefined) {
                this.rilisanData = data;
                if(this.pageNumber > this.rilisanData.total_pages){
                  this.pageNumber = this.rilisanData.total_pages;
                  this._router.navigate(['../', this.pageNumber], {
                    relativeTo: this._route
                  });
                }
              }
            },
            err => {
              console.log(err.message);
            }
          );
      this._pelayanService.getGenres()
          .subscribe(
            data => {
              if(data !== null && data !== undefined) {
                this.genreData = data;
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

  openDetail(id: number){
    this._pelayanService.openDetailPage(id);
  }

}
