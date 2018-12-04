import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { 
  IPengumumanHome, 
  IDiskusiHome, 
  IRilisanHome, 
  IPopularHome, 
  IRilisanDetail,
  IGenres
 } from './pelayan';

@Injectable({
  providedIn: 'root'
})
export class PelayanService {

  private websiteData = {
    "websiteTitle": "Misty Chronexial",
    "sudahLogin": false
  };
  private TMDbAPIKey: string = "2c864ba983acc179387f55e736decaf9";
  private APIReadAccessTokenV4: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzg2NGJhOTgzYWNjMTc5Mzg3ZjU1ZTczNmRlY2FmOSIsInN1YiI6IjViZjRmNjg1YzNhMzY4MThhMzBiOWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fJLY67P3_yC-C1cDvjEttNEYhPVTZf4BraM-lKDP2Vo";
  private pengumumanHome: string = "/assets/json/pengumuman.json";
  private diskusiHome: string = "/assets/json/diskusi.json";
  private rilisanHome: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + this.TMDbAPIKey + "&language=en-US&page=";
  private popularHome: string = "https://api.themoviedb.org/3/movie/popular?api_key=" + this.TMDbAPIKey + "&language=en-US&page=";
  private rilisanDetail: string = "https://api.themoviedb.org/3/movie/";
  private genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.TMDbAPIKey;

  constructor(private http: HttpClient, private _router: Router, private _route: ActivatedRoute) { }

  getWesiteData() {
    return this.websiteData;
  }

  getPengumumanHome(): Observable<IPengumumanHome[]> {
    return this.http.get<IPengumumanHome[]>(this.pengumumanHome);
  }

  getDiskusiHome(): Observable<IDiskusiHome[]> {
    return this.http.get<IDiskusiHome[]>(this.diskusiHome);
  }

  getRilisan(page: number): Observable<IRilisanHome[]> {
    return this.http.get<IRilisanHome[]>(this.rilisanHome + page);
  }
  
  getRilisanDetail(id: number): Observable<IRilisanDetail[]> {
    return this.http.get<IRilisanDetail[]>(this.rilisanDetail + id + '?api_key=' + this.TMDbAPIKey);
  }

  getGenres(): Observable<IGenres[]> {
    return this.http.get<IGenres[]>(this.genres);
  }

  getPopuler(page: number): Observable<IPopularHome[]> {
    return this.http.get<IPopularHome[]>(this.popularHome + page);
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

}


