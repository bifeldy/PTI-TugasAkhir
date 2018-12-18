import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'app-rilisan-detail',
  templateUrl: './rilisan-detail.component.html',
  styleUrls: ['./rilisan-detail.component.css']
})
export class RilisanDetailComponent implements OnInit {

  public dataId: number;
  public detailData = {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: "",
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: ""
      }
    ],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: "",
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0
  };
  public detailStaff = {
    id: 0,
    cast: [
        {
            cast_id: 0,
            character: "",
            credit_id: "",
            gender: 0,
            id: 0,
            name: "",
            order: 0,
            profile_path: ""
        }
    ],
    crew: [
        {
            credit_id: 0,
            department: "",
            gender: 0,
            id: 0,
            job: "",
            name: "",
            profile_path: ""
        }
    ]
  };

  constructor(
    private _pelayanService: PelayanService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Sekali Ini Tidak Listening URL
    this.dataId = parseInt(this._route.snapshot.paramMap.get('id'));
    if(this.dataId <= 0){
      this.dataId = 1;
      this._router.navigate(['../', this.dataId], {
        relativeTo: this._route
      });
    }
    this._pelayanService.getRilisanDetail(this.dataId).subscribe(
      data => {
        if(data !== null && data !== undefined) {
          this.detailData = data;
          if (this.detailData.poster_path == null || this.detailData.poster_path == "") {
                this.detailData.poster_path = "/assets/img/404.png";
          }
          else {
            this.detailData.poster_path = "https://image.tmdb.org/t/p/original" + this.detailData.poster_path;
          }
          for (let index = 0; index < this.detailData.production_companies.length; index++) {
            if (this.detailData.production_companies[index].logo_path == null || this.detailData.production_companies[index].logo_path == "") {
              this.detailData.production_companies[index].logo_path = "/assets/img/404.jpeg"
            }
            else {
              this.detailData.production_companies[index].logo_path = "https://image.tmdb.org/t/p/original" + this.detailData.production_companies[index].logo_path;
            }
          }
          if (this.detailData.release_date == "" || this.detailData.release_date == null) this.detailData.release_date = 'Tanggal Tidak Diketahui!';
          if (this.detailData.status == "" || this.detailData.status == null) this.detailData.status = 'Tidak Jelas!';
        }
      },
      err => {
        console.log(err.message);
      }
    );
    this._pelayanService.getStaff(this.dataId).subscribe(
      data => {
        if(data !== null && data !== undefined) {
          this.detailStaff = data;
          for (let index = 0; index < this.detailStaff.cast.length; index++) {
            if (this.detailStaff.cast[index].profile_path == null || this.detailStaff.cast[index].profile_path == "") {
              this.detailStaff.cast[index].profile_path = "/assets/img/404.jpg";
            }
            else {
              this.detailStaff.cast[index].profile_path = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + this.detailStaff.cast[index].profile_path;
            }
          }
          if (this.detailStaff.cast.length < 5) {
            let jumlahCastKosong = this.detailStaff.cast.length;
            for (let index = 0; index < 5-jumlahCastKosong; index++) {
              this.detailStaff.cast.push({
                cast_id: -1,
                character: "",
                credit_id: "",
                gender: -1,
                id: index,
                name: "Tidak Ada Data",
                order: index,
                profile_path: "/assets/img/404.jpg"
              });
            }
          }
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
