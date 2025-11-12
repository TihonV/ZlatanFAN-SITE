const CACHE_NAME = 'zlatan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/images/water.jpg',
  '/assets/images/app.jpg',
  '/assets/images/fragrance.jpg',
  '/assets/images/underwear.jpg',
  '/assets/images/footwear.jpg',
  '/assets/images/zlatan-bg.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
