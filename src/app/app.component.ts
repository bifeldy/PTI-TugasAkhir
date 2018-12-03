import { Component } from '@angular/core';
import { PelayanService } from './_pelayan/pelayan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public wesiteData = {};

  constructor(private _pelayanService: PelayanService) { }

  ngOnInit() {
    this.wesiteData = this._pelayanService.getWesiteData();
  }

}