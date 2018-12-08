import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards';

import { BerandaComponent } from './beranda/beranda.component';
import { MasukComponent } from './masuk/masuk.component';
import { KesalahanComponent } from './kesalahan/kesalahan.component';
import { RilisanComponent } from './rilisan/rilisan.component';
import { PengumumanComponent } from './pengumuman/pengumuman.component';
import { PengumumanDetailComponent } from './pengumuman-detail/pengumuman-detail.component';
import { RilisanDetailComponent } from './rilisan-detail/rilisan-detail.component';
import { TentangComponent } from './tentang/tentang.component';
import { DaftarComponent } from './daftar/daftar.component';
import { KeluarComponent } from './keluar/keluar.component';

const routes: Routes = [
  // Halaman Utama
  { path: '', component: BerandaComponent },
  // Halaman Link User
  { path: 'masuk', component: MasukComponent },
  { path: 'keluar', component: KeluarComponent },
  { path: 'daftar', component: DaftarComponent },
  // Halaman Pengumuman
  { path: 'pengumuman', component: PengumumanComponent },
  { path: 'pengumuman/:id', component: PengumumanDetailComponent, canActivate: [AuthGuard] },
  // Halaman Rilisan
  { path: 'rilisan', redirectTo: 'rilisan/1' },
  { path: 'rilisan/:id', component: RilisanComponent, canActivate: [AuthGuard] },
  // Detail Film
  { path: 'detail', redirectTo: 'rilisan/1' },
  { path: 'detail/:id', component: RilisanDetailComponent, canActivate: [AuthGuard] },
  // Halaman Tentang
  { path: 'tentang', component: TentangComponent },
  // Halaman 404
  { path: 'kesalahan', component: KesalahanComponent },
  // Halaman Yang Tidak Ketemu 404
  { path: '**', redirectTo: 'kesalahan' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }