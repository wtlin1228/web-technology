// 1. Here we add an install event listener to the service worker (hence self), 
//    and then chain a ExtendableEvent.waitUntil() method onto the event — this ensures that 
//    the service worker will not install until the code inside waitUntil() has successfully occurred.
self.addEventListener('install', (event) => {
  event.waitUntil(
    // 2. Inside waitUntil() we use the caches.open() method to create a new cache called v1, 
    //    which will be version 1 of our site resources cache. 
    //    This returns a promise for a created cache; once resolved, 
    //    we then call a function that calls addAll() on the created cache, 
    //    which for its parameter takes an array of origin-relative URLs to all the resources you want to cache.
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './image-list.js',
        './star-wars-logo.jpg',
        './gallery/',
        './gallery/bountyHunters.jpg',
        './gallery/myLittleVader.jpg',
        './gallery/snowTroopers.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      // console.log("it's cached");
      return response;
    } else {
      // console.log("it's not cached")
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        // if extra images were added to the Star Wars gallery, 
        // our app could automatically grab them and cache them.
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        // if the request doesn’t match anything in the cache, 
        // and the network is not available, our request will still fail.
        return caches.match('./gallery/myLittleVader.jpg');
      });
    }
  }));
});

self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['v1'];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});