import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PelayanService } from '../_pelayan/pelayan.service';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-keluar',
  template: `
  `,
  styles: []
})
export class KeluarComponent implements OnInit {

  currentUser: User;

  constructor(
    private _pelayanService: PelayanService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.authenticationService.logout();
    location.reload();
    this.router.navigate(['/']);
  }

}
