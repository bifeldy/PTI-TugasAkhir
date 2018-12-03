import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPengumumanHome, IDiskusiHome } from './pelayan';

@Injectable({
  providedIn: 'root'
})
export class PelayanService {

  private websiteData = {
    "websiteTitle": "Misty Chronexial",
    "sudahLogin": false
  };
  private pengumumanHome: string = "/assets/json/pengumumanHome.json";
  private diskusiHome: string = "/assets/json/diskusiHome.json";

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

  getRilisanHome() {

  }

  getPopulerHome() {

  }

}


