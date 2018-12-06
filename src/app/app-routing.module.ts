import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { MasukComponent } from './masuk/masuk.component';
import { KesalahanComponent } from './kesalahan/kesalahan.component';
import { RilisanComponent } from './rilisan/rilisan.component';
import { PengumumanComponent } from './pengumuman/pengumuman.component';
import { PengumumanDetailComponent } from './pengumuman-detail/pengumuman-detail.component';
import { DiskusiComponent } from './diskusi/diskusi.component';
import { RilisanDetailComponent } from './rilisan-detail/rilisan-detail.component';

const routes: Routes = [
  // Halaman Utama
  { path: '', component: BerandaComponent },
  // Halaman Link Lainnya
  { path: 'masuk', component: MasukComponent },
  // Halaman Pengumuman
  { path: 'pengumuman', component: PengumumanComponent },
  { path: 'pengumuman/:id', component: PengumumanDetailComponent },
  // Halaman Rilisan
  { path: 'rilisan', redirectTo: 'rilisan/1' },
  { path: 'rilisan/:id', component: RilisanComponent },
  // Halaman Diskusi
  { path: 'diskusi', component: DiskusiComponent },
  // Detail Film
  { path: 'detail', redirectTo: 'rilisan/1' },
  { path: 'detail/:id', component: RilisanDetailComponent },
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