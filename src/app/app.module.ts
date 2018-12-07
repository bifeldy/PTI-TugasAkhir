import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    MasukComponent,
    KesalahanComponent,
    RilisanComponent,
    PengumumanComponent,
    PengumumanDetailComponent,
    RilisanDetailComponent,
    TentangComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DisqusModule.forRoot('bifeldy')
  ],
  providers: [PelayanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
