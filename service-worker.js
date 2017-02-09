var CACHE_NAME = 'v2';
var urlsToCache = [
  '/',
  '/index.html',
  '/resume.html',
  '/design.html',
  '/css/main.css.gz',
  '/js/scripts.js.gz'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("activate", function(event) {

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== CACHE_NAME) {
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});