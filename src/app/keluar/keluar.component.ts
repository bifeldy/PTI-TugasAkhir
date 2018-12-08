import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-keluar',
  template: `
    "Susahnya" Sistem Login Masuk Di FrontEnd -- Asli Berantakan! Wkwkwk~
  `,
  styles: []
})
export class KeluarComponent implements OnInit {

  currentUser: User;

  constructor(
    private _pelayanService: PelayanService,
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {
    this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this._authenticationService.logout();
    location.reload();
    this._router.navigate(['/']);
  }

}
