const CACHE_NAME = 'zlatan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/videos/goal1.mp4',
  '/videos/goal2.mp4',
  '/videos/goal3.mp4',
  '/assets/images/zlatan-bg.jpg',
  '/assets/icons/arrow.svg'
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
