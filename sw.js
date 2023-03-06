// Change this to your repository name
var GHPATH = '/DeckOfCardsWorkout';
 
// Choose a different app prefix name
var APP_PREFIX = 'DoCW';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_11';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/WorkofCards.js`
]

let currentPath = self.location.href.replace("/sw.js", "");

const cacheName = "WoCW"
const assets = [
    "/",
    "/index.html",
    "/WorkofCards.js",
].map(url => currentPath + url)

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
