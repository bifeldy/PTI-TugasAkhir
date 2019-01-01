/* 
    JavaScript Untuk Keseluruhan Halaman Website
    -- Basilius Bias Astho Christyono
    -- bias.astho@gmail.com
*/

/** Ukuran Window Di Resize */
function windowResize() {

    /** Khusus Desktop */
    if(window.innerWidth > 768 || window.OuterWidth > 768) {
            
        // Sembunyikan Tombol Menu Mobile
        document.getElementById('nav-open-close').style.display = '';

        // Paksa Tutup Menu
        let mobileNav = document.getElementById('nav-open-close').getElementsByTagName('i')[0];
        mobileNav.className = "fa fa-fw fa-navicon";
        document.getElementById('navbar').style.height = '';
        let sidebarMenu = document.getElementById('navbar').getElementsByTagName('a');
        for(var i=0; i<sidebarMenu.length; i++) {
            sidebarMenu[i].getElementsByClassName('visibleMenu')[0].style.display = 'none';
        }

        document.getElementById('navbar').style.backgroundImage = '';
        navbarOpen = false;

        // Tutup Menu
        for(var i=0; i<sidebarMenu.length; i++) {
            sidebarMenu[i].getElementsByClassName('visibleMenu')[0].style.display = 'none';
        }

        document.getElementById('navbar').style.backgroundImage = '';
        navbarOpen = false;
        Delay = 125;
    }

    let SynopsisRilisan = document.getElementsByClassName("synopsis");
    let GambarRilisan = document.getElementsByClassName("image");
    let RilisanContent = document.getElementsByClassName("rilisan-content");
    if(SynopsisRilisan != undefined && GambarRilisan != undefined) {
        for(let i=0; i< SynopsisRilisan.length; i++){
            RilisanContent[i].setAttribute("style", "height: " + GambarRilisan[i].clientHeight + "px;");
            SynopsisRilisan[i].setAttribute("style", "height: " + GambarRilisan[i].clientHeight + "px;");
            console.log("Bias");
        }
    }

}

/** Ambil Parameter Dari URL */
function parseURLParams(url) {

    /** https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript */

    var queryStart = url.indexOf("?") + 1,
    queryEnd   = url.indexOf("#") + 1 || url.length + 1,
    query = url.slice(queryStart, queryEnd - 1),
    pairs = query.replace(/\+/g, " ").split("&"),
    parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
    nv = pairs[i].split("=", 2);
    n = decodeURIComponent(nv[0]);
    v = decodeURIComponent(nv[1]);
    if (!parms.hasOwnProperty(n)) parms[n] = [];
    parms[n].push(nv.length === 2 ? v : null);
    }

    return parms;
}

/** Boolean Status Menu */
var navbarOpen = false;
var Delay = 125;
/** Buka Tutup Menu */
function toggleShowHide() {    
    let sidebarMenu = document.getElementById('navbar').getElementsByTagName('a');
    if(navbarOpen){
        // Tutup Menu
        for(var i=0; i<sidebarMenu.length; i++) {
            sidebarMenu[i].getElementsByClassName('visibleMenu')[0].style.display = 'none';
        }
        //-- document.getElementById('navbar').style.backgroundImage = '';
        navbarOpen = false;
        Delay = 125;
    }
    else {
        // Buka Menu
        for(var i=0; i<sidebarMenu.length; i++) {
            sidebarMenu[i].getElementsByClassName('visibleMenu')[0].style.display = 'inline-block';
        }
        //-- document.getElementById('navbar').style.backgroundImage = 'url(/img/sidebar/bg.png)';
        navbarOpen = true;
        Delay = 0;
    }
}

/** Buka Tutup Desktop Menu */
function navbarShowHide(){
    // Ukuran Resolusi Layar Desktop Doank
    if(window.innerWidth > 768 || window.OuterWidth > 768) {
        setTimeout(toggleShowHide, Delay);
    }
}

/** Buka Tutup Mobile Menu */
function mobileShowHide() {
    // Icon Bar Menu Dan Close
    var mobileNav = document.getElementById('nav-open-close').getElementsByTagName('i')[0];
    if (mobileNav.className === "fa fa-fw fa-navicon") {
        // Buka Menu
        document.getElementById('navbar').style.height = '100%';
        mobileNav.className += "fa fa-fw fa-remove";
        toggleShowHide();
    }
    else {
        // Tutup Menu
        mobileNav.className = "fa fa-fw fa-navicon";
        document.getElementById('navbar').style.height = '';
        toggleShowHide();
    }
};