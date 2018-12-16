import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../_services';
import { PelayanService } from '../_pelayan/pelayan.service';

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(
    private _alertService: AlertService,
    private _pelayanService: PelayanService
  ) { }

  ngOnInit() {
    this.subscription = this._alertService.getMessage().subscribe(message => { 
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}