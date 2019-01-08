import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { 
  IPengumuman,
  IRilisanHome, 
  IPopularHome, 
  IRilisanDetail,
  IGenres,
  IGithubLastCommit,
  ITentang,
  IStaff
 } from './pelayan';

@Injectable({
  providedIn: 'root'
})
export class PelayanService {
  
  private TMDbAPIKey: string = "2c864ba983acc179387f55e736decaf9";
  private APIReadAccessTokenV4: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzg2NGJhOTgzYWNjMTc5Mzg3ZjU1ZTczNmRlY2FmOSIsInN1YiI6IjViZjRmNjg1YzNhMzY4MThhMzBiOWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fJLY67P3_yC-C1cDvjEttNEYhPVTZf4BraM-lKDP2Vo";
  private pengumumanHome: string = "assets/json/pengumuman.json";
  private rilisanHome: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + this.TMDbAPIKey + "&language=en-US&page=";
  private popularHome: string = "https://api.themoviedb.org/3/movie/popular?api_key=" + this.TMDbAPIKey + "&language=en-US&page=";
  private rilisanDetail: string = "https://api.themoviedb.org/3/movie/";
  private genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.TMDbAPIKey;
  private githubAPI = "https://api.github.com/repos/bifeldy/PTI-TugasAkhir/commits/master";
  private Tentang = "assets/json/tentang.json";

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  getPengumumanHome(): Observable<IPengumuman[]> {
    return this._http.get<IPengumuman[]>(this.pengumumanHome);
  }

  getRilisan(page: number): Observable<IRilisanHome> {
    return this._http.get<IRilisanHome>(this.rilisanHome + page);
  }
  
  getRilisanDetail(id: number): Observable<IRilisanDetail> {
    return this._http.get<IRilisanDetail>(this.rilisanDetail + id + '?api_key=' + this.TMDbAPIKey);
  }

  getStaff(id: number): Observable<IStaff> {
    return this._http.get<IStaff>(this.rilisanDetail + id + '/credits?api_key=' + this.TMDbAPIKey);
  }

  getGenres(): Observable<IGenres> {
    return this._http.get<IGenres>(this.genres);
  }

  getPopuler(page: number): Observable<IPopularHome> {
    return this._http.get<IPopularHome>(this.popularHome + page);
  }

  openDetailPage(id: number){
    this._router.navigate(['/detail', id], {
      relativeTo: this._route
    });
  }

  public loadScriptURL(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public loadScriptTEXT(text: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = text;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  githubLastCommit(): Observable<IGithubLastCommit> {
    return this._http.get<IGithubLastCommit>(this.githubAPI);
  }

  getAbout(): Observable<ITentang> {
    return this._http.get<ITentang>(this.Tentang);
  }

}


