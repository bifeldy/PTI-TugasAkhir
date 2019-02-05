# ![logo](src/favicon.ico) *PTI-TugasAkhir | Web. Forum*

> Sebuah website yang berbentuk forum dibuat sebagai tugas akhir mata kuliah 'Pengantar Teknologi Internet' <br />
> Mata Kuliah Ini Bersifat Front-End Saja (Tanpa Back-End) (>_<")

<br />

![](src/assets/img/banner-logo/banner-logo-atas.png)

----

> Jangan lupa *join* Discord <br />
[![Chat on Discord](https://discordapp.com/api/guilds/342220398022098944/widget.png "Chat on Discord")](https://discord.gg/xGWdExk)

<br />

## Tentang Tugas

Tempat Sharing Gitu Deh ...

<br />

### Download -> *Edit*

```sh
$ git clone https://github.com/bifeldy/PTI-TugasAkhir.git
$ cd PTI-TugasAkhir
$ npm install
$ ng serve --open
```

### Modify *.htaccess* File on Your Web-Hosting

```.htaccess
RewriteEngine On
    # If an existing asset or directory is requested go to it as it is
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
    RewriteRule ^ - [L]
    # If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html
```

### Build Project And Upload!

```sh
$ ng build --prod
$ cd dist/PTI-TugasAkhir
```
Upload All File To *public_html* And Make Sure Same Directory With *.htaccess*

<br />

### Library, And Framework Used
* [NodeJS v11.3](https://nodejs.org/)
* [Angular v7.1](https://angular.io/guide/quickstart)
* [Bootstrap v4.1](https://getbootstrap.com/docs/4.1/getting-started/download)
* [jQuery v3.3](https://jquery.com/download)
* [Rxjs v6.3](https://rxjs-dev.firebaseapp.com/guide/installation)
* [Flickity v2.1](https://flickity.metafizzy.co)

<br />

## Pengembang

* [**Basilius Bias Astho Christyono**](https://www.FaceBook.com/Bifeldy)

<br />

## Lisensi

Proyek ini berada di bawah Lisensi GNU Lesser General Public License v3.0 <br />
Harap melihat [LICENSE](LICENSE) untuk informasi tingkat lanjut.
