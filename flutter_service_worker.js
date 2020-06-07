'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "266f67add26df9439509a3cac4e9e916",
"assets/assets/3D.jpg": "28ad08fa588189d125bb11aedd8362d2",
"assets/assets/AnionCode.png": "abd4735ae247017a07b9e106e9fd2896",
"assets/assets/fb.png": "7c9d5e6baee2878494a952baa6658528",
"assets/assets/FontManifest.json": "e03be0e0d5bdcda62663c880ce70045c",
"assets/assets/github.png": "784ac5d4aaf879765fe8b6d07dcb2f1e",
"assets/assets/google.png": "b5929c32ad5e8a5a86c9e1daf80e0dbb",
"assets/assets/hiraminpro-w3.otf": "3fabfe5faf69d7514122ef7c61d9e62c",
"assets/assets/icon.png": "3c6ff3381b32dacd4dad2c072a8245fb",
"assets/assets/image.png": "5c06bfd71a736e53efc2dc4790df1d10",
"assets/assets/image_01.png": "a299c520f67de8b3642ff90f910ae81b",
"assets/assets/linkedin.png": "52b2e2733a867f75da68fa633f34713f",
"assets/assets/Lukieoo.png": "c4ddbdfa94dce044b1f08cc6f611e856",
"assets/assets/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/assets/mobile-cont.png": "7ce62665df5c5ac9de76c908159972ae",
"assets/assets/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/myapp/comer1.png": "1b73cd7ea2a3169701fc780f77aa8bc8",
"assets/assets/myapp/comer1.webp": "babcf62f0ea229b1151a223fcf5536e3",
"assets/assets/myapp/comer2.png": "f77aad60ac3e93a662df325cf827c124",
"assets/assets/myapp/comer2.webp": "80ba087a0bd315ea0ff3d875b07f001e",
"assets/assets/myapp/comer3.png": "28653f96f7314b43694316cc24dafaa9",
"assets/assets/myapp/comer3.webp": "c9209f4169b718167232a6bceb92aa7d",
"assets/assets/myapp/comer4.png": "c3eeb48554433ab9fce26c5ab6e396f6",
"assets/assets/myapp/comer4.webp": "6ac35f8350b4cd26c38c74788f9ac807",
"assets/assets/myapp/rect1.png": "d963a354c3d84079db8353f7835aebba",
"assets/assets/myapp/rect2.png": "27cee0d973f95e3385164e931936541b",
"assets/assets/myapp/rect3.png": "7417c69dabf38f6353b6e8c1acd99311",
"assets/assets/myapp/rect4.png": "4903a46818b604efb86b077fba48f29a",
"assets/assets/myapp/rect5.png": "7d56b788926e7150827643a0e5d7f003",
"assets/assets/myapp/unnamed0.png": "9f96d852c259b8223ad2030c817d53f8",
"assets/assets/myapp/unnamed0.webp": "0e3d554230fc94c9be63bbffcca60d73",
"assets/assets/myapp/unnamed1.png": "1a940e731182401c03466f273af342c2",
"assets/assets/myapp/unnamed1.webp": "ccc8ba52b1c0647438db945d1bcf5b7a",
"assets/assets/myapp/unnamed2.png": "de45593b163dacba30f725cf962dbb9b",
"assets/assets/myapp/unnamed2.webp": "42a666d68d48428dff4247012800f0aa",
"assets/assets/myapp/unnamed3.png": "4a281754cebb5462b24cabde90a49b2c",
"assets/assets/myapp/unnamed3.webp": "17a0699d7b037c0696f0aa7cf4d76c8b",
"assets/assets/myapp/unnamed4.png": "5859f1dd0198d3b429fb635abff3bb1e",
"assets/assets/myapp/unnamed4.webp": "07f34f4614fbdd24bed855aa6d4433af",
"assets/assets/myapps.png": "98bd7ad602403af4795049ef6a854450",
"assets/assets/sent.png": "a76dea49fba5b97bf9504db741d38356",
"assets/assets/SocialKit.ttf": "5e773df80583747cf26453565aef31c0",
"assets/assets/youtube.png": "0dd6fbb761adfdd49488f67d247c940e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d95248006e155116a86b0a0719e2b1c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "3c6ff3381b32dacd4dad2c072a8245fb",
"favicons.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "3c6ff3381b32dacd4dad2c072a8245fb",
"icons/Icon-513.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d678e383e96d95ccd8ba11d3268c29d5",
"/": "d678e383e96d95ccd8ba11d3268c29d5",
"main.dart.js": "4f112ddd482cbe518e8c84e642c39014",
"manifest.json": "6fc5373089273882d382e64b0106811d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
