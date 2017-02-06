var CACHE_NAME = 'v1';
var cacheFiles = [
	'index.html',
	'css/main.css'
]

self.addEventListener("install", function(event) {
	console.log('WORKER: install event in progress.');

	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
				console.log('WORKER: caching cacheFiles')
				return cache.addAll(cacheFiles);
		})
	)
})

self.addEventListener("activate", function(event) {
	console.log('WORKER: activated.');

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== CACHE_NAME) {
					console.log("WORKER: removing outdated cached files from ", thisCacheName);
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