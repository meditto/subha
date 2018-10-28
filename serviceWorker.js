importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.png'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.css'),
    workbox.strategies.networkFirst()
);