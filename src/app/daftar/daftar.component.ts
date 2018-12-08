import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.css']
})
export class DaftarComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _userService: UserService,
    private _alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) { 
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this._userService.register(this.registerForm.value)
        .pipe(first()).subscribe(
          data => {
              this._alertService.success('Registration successful', true);
              this._router.navigate(['/masuk']);
          },
          error => {
              this._alertService.error(error);
              this.loading = false;
          });
  }
}