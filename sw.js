const CACHE_VERSION = 1;
const CURRENT_CACHES = {
    prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};

self.addEventListener("install", (event) => {
    const urlsToPrefetch = [
        './',
        'index.html',
        'manifest.json',
        'sw.js',
        'portfolio-details.html',
        './assets/css/style.css',
        './assets/img/android-launchericon-192-192.png',
        './assets/img/android-launchericon-512-512.png',
        './assets/img/apple-touch-icon.png',
        './assets/img/facebook.png',
        './assets/img/favicon-black.png',
        './assets/img/favicon-white.png',
        './assets/img/home-image.png',
        './assets/img/home-image-2.jpeg',
        './assets/img/home-image-3.jpeg',
        './assets/img/home-image-bw.png',
        './assets/img/instagram.png',
        './assets/img/linkedin.png',
        './assets/img/about.png',
        './assets/img/screenshot.png',
        './assets/img/android-launchericon-192-192-black.png',
        './assets/img/android-launchericon-512-512-black.png',
        './assets/img/home.png',
        './assets/img/resume.png',
        './assets/img/portfolio/portfolio-1.jpg',
        './assets/img/portfolio/portfolio-2.jpg',
        './assets/img/portfolio/portfolio-3.jpg',
        './assets/img/portfolio/portfolio-4.jpg',
        './assets/img/portfolio/portfolio-5.jpg',
        './assets/img/portfolio/portfolio-6.jpg',
        './assets/img/portfolio/portfolio-7.jpg',
        './assets/img/portfolio/portfolio-8.jpg',
        './assets/img/portfolio/portfolio-9.jpg',
        './assets/img/portfolio/portfolio-details-1.jpg',
        './assets/img/portfolio/portfolio-details-2.jpg',
        './assets/img/portfolio/portfolio-details-3.jpg',
        './assets/img/testimonials/testimonials-1.jpg',
        './assets/img/testimonials/testimonials-2.jpg',
        './assets/img/testimonials/testimonials-3.jpg',
        './assets/img/testimonials/testimonials-4.jpg',
        './assets/img/testimonials/testimonials-5.jpg',
        './assets/js/main.js',
        './assets/js/pwa.js',
        './assets/vendor/bootstrap/css/bootstrap.css',
        './assets/vendor/bootstrap/css/bootstrap.css.map',
        './assets/vendor/bootstrap/css/bootstrap-grid.css',
        './assets/vendor/bootstrap/css/bootstrap-grid.css.map',
        './assets/vendor/bootstrap/css/bootstrap-grid.min.css',
        './assets/vendor/bootstrap/css/bootstrap-grid.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap-grid.rtl.css',
        './assets/vendor/bootstrap/css/bootstrap-grid.rtl.css.map',
        './assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css',
        './assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap.min.css',
        './assets/vendor/bootstrap/css/bootstrap.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap-reboot.css',
        './assets/vendor/bootstrap/css/bootstrap-reboot.css.map',
        './assets/vendor/bootstrap/css/bootstrap-reboot.min.css',
        './assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css',
        './assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map',
        './assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css',
        './assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap.rtl.css',
        './assets/vendor/bootstrap/css/bootstrap.rtl.css.map',
        './assets/vendor/bootstrap/css/bootstrap.rtl.min.css',
        './assets/vendor/bootstrap/css/bootstrap.rtl.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap-utilities.css',
        './assets/vendor/bootstrap/css/bootstrap-utilities.css.map',
        './assets/vendor/bootstrap/css/bootstrap-utilities.min.css',
        './assets/vendor/bootstrap/css/bootstrap-utilities.min.css.map',
        './assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css',
        './assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map',
        './assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css',
        './assets/vendor/bootstrap/js/bootstrap.bundle.js',
        './assets/vendor/bootstrap/js/bootstrap.bundle.js.map',
        './assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        './assets/vendor/bootstrap/js/bootstrap.bundle.min.js.map',
        './assets/vendor/bootstrap/js/bootstrap.esm.js',
        './assets/vendor/bootstrap/js/bootstrap.esm.js.map',
        './assets/vendor/bootstrap/js/bootstrap.esm.min.js',
        './assets/vendor/bootstrap/js/bootstrap.esm.min.js.map',
        './assets/vendor/bootstrap/js/bootstrap.js',
        './assets/vendor/bootstrap/js/bootstrap.js.map',
        './assets/vendor/bootstrap/js/bootstrap.min.js',
        './assets/vendor/bootstrap-icons/bootstrap-icons.css',
        './assets/vendor/bootstrap-icons/bootstrap-icons.json',
        './assets/vendor/bootstrap-icons/bootstrap-icons.scss',
        './assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff',
        './assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2',
        './assets/vendor/boxicons/css/animations.css',
        './assets/vendor/boxicons/css/boxicons.css',
        './assets/vendor/boxicons/css/boxicons.min.css',
        './assets/vendor/boxicons/css/transformations.css',
        './assets/vendor/boxicons/fonts/boxicons.eot',
        './assets/vendor/boxicons/fonts/boxicons.svg',
        './assets/vendor/boxicons/fonts/boxicons.ttf',
        './assets/vendor/boxicons/fonts/boxicons.woff',
        './assets/vendor/boxicons/fonts/boxicons.woff2',
        './assets/vendor/glightbox/css/glightbox.css',
        './assets/vendor/glightbox/css/glightbox.min.css',
        './assets/vendor/glightbox/css/plyr.css',
        './assets/vendor/glightbox/css/plyr.min.css',
        './assets/vendor/glightbox/js/glightbox.js',
        './assets/vendor/glightbox/js/glightbox.min.js',
        './assets/vendor/isotope-layout/isotope.pkgd.js',
        './assets/vendor/isotope-layout/isotope.pkgd.min.js',
        './assets/vendor/purecounter/purecounter_vanilla.js',
        './assets/vendor/purecounter/purecounter_vanilla.js.map',
        './assets/vendor/remixicon/remixicon.css',
        './assets/vendor/remixicon/remixicon.eot',
        './assets/vendor/remixicon/remixicon.less',
        './assets/vendor/remixicon/remixicon.svg',
        './assets/vendor/remixicon/remixicon.symbol.svg',
        './assets/vendor/remixicon/remixicon.ttf',
        './assets/vendor/remixicon/remixicon.woff',
        './assets/vendor/remixicon/remixicon.woff2',
        './assets/vendor/swiper/swiper-bundle.min.css',
        './assets/vendor/swiper/swiper-bundle.min.js',
        './assets/vendor/swiper/swiper-bundle.min.js.map',
        './assets/vendor/waypoints/noframework.waypoints.js',
    ];

    console.log(
        "Handling install event. Resources to pre-fetch:",
        urlsToPrefetch
    );

    event.waitUntil(
        caches
            .open(CURRENT_CACHES["prefetch"])
            .then((cache) => {
                return cache
                    .addAll(
                        urlsToPrefetch.map((urlToPrefetch) => {
                            return new Request(urlToPrefetch, { mode: "no-cors" });
                        })
                    )
                    .then(() => {
                        console.log("All resources have been fetched and cached.");
                    });
            })
            .catch((error) => {
                console.error("Pre-fetching failed:", error);
            })
    );
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async function () {
            try {
                return await fetch(event.request);
            } catch (err) {
                return caches.match(event.request);
            }
        })(),
    );
});