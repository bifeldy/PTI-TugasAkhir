import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertComponent } from './_components';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { BerandaComponent } from './beranda/beranda.component';
import { MasukComponent } from './masuk/masuk.component';
import { KesalahanComponent } from './kesalahan/kesalahan.component';
import { RilisanComponent } from './rilisan/rilisan.component';
import { PelayanService } from './_pelayan/pelayan.service';
import { PengumumanComponent } from './pengumuman/pengumuman.component';
import { PengumumanDetailComponent } from './pengumuman-detail/pengumuman-detail.component';
import { RilisanDetailComponent } from './rilisan-detail/rilisan-detail.component';
import { DisqusModule } from "ngx-disqus";
import { TentangComponent } from './tentang/tentang.component';
import { DaftarComponent } from './daftar/daftar.component';
import { KeluarComponent } from './keluar/keluar.component';

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    MasukComponent,
    DaftarComponent,
    KesalahanComponent,
    RilisanComponent,
    PengumumanComponent,
    PengumumanDetailComponent,
    RilisanDetailComponent,
    TentangComponent,
    AlertComponent,
    KeluarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DisqusModule.forRoot('bifeldy')
  ],
  providers: [
    PelayanService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
