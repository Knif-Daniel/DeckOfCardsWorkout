

let currentPath = self.location.href.replace("/sw.js", "");

const cacheName = "cards-workout-v1"
const assets = [
    "/",
    "/index.html",
    "/WorkofCards.js"
   
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
