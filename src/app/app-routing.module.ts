import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { MasukComponent } from './masuk/masuk.component';
import { KesalahanComponent } from './kesalahan/kesalahan.component';
import { RilisanComponent } from './rilisan/rilisan.component';

const routes: Routes = [
  // Halaman Utama
  { path: '', component: BerandaComponent },
  // Halaman Link Lainnya
  { path: 'masuk', component: MasukComponent },
  // Halaman Rilisan
  { path: 'rilisan', redirectTo: 'rilisan/1' },
  { path: 'rilisan/:id', component: RilisanComponent },
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