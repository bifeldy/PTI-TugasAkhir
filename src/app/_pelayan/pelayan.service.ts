import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPengumumanHome, IDiskusiHome, IRilisanHome } from './pelayan';

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

  constructor(private http: HttpClient) { }

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

  getPopulerHome() {

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


