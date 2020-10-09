/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b669d8828a11eb21f9502d564e26c357"
  },
  {
    "url": "accumulate/1.html",
    "revision": "d6c70c6f4efb7fd59fbdb0bb75b7c65f"
  },
  {
    "url": "accumulate/10.html",
    "revision": "0d314ea1c50c8bf7ddea38e80f8bc75a"
  },
  {
    "url": "accumulate/11.html",
    "revision": "06ded0910a841983843c63fc815e99eb"
  },
  {
    "url": "accumulate/2.html",
    "revision": "4ff84647356766c58813a591785e61e5"
  },
  {
    "url": "accumulate/3.html",
    "revision": "03567ac703554fcbc991f65f278f0351"
  },
  {
    "url": "accumulate/4.html",
    "revision": "cc10cd3738ff8003954a01a238e2de51"
  },
  {
    "url": "accumulate/5.html",
    "revision": "8ff23612b6cb3aa54b8b22a7c9224ac0"
  },
  {
    "url": "accumulate/6.html",
    "revision": "5f258d048b6402d9774aa19112a0dbac"
  },
  {
    "url": "accumulate/7.html",
    "revision": "0b0397f9b6d5e18f7afdf5d3652d2b9b"
  },
  {
    "url": "accumulate/8.html",
    "revision": "58aa12e902b668e85eb9f2bbfa4ad29a"
  },
  {
    "url": "accumulate/9.html",
    "revision": "544f6fe8f060c95b1474379a5f91c238"
  },
  {
    "url": "accumulate/Git Commit 代码提交规范.html",
    "revision": "2791ab9295425223f851f3bab58b93ed"
  },
  {
    "url": "accumulate/index.html",
    "revision": "05665ed460518a9cae9a1efba5583baa"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a90b372b176f16359ba90e05a80e60b6"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.ad118442.css",
    "revision": "81775006b7c0f4e4412e3e756d58ac5c"
  },
  {
    "url": "assets/css/styles.b57f1ce9.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.babd7481.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.8240decf.js",
    "revision": "c2e184be392b71300aae24ec33f4cc49"
  },
  {
    "url": "assets/js/11.3d0d037c.js",
    "revision": "3b5e6abeb33cdf986d1382efac54074a"
  },
  {
    "url": "assets/js/12.f5c0dbef.js",
    "revision": "d436ab51f5348e3db300ec8d0779c5ee"
  },
  {
    "url": "assets/js/13.455f793a.js",
    "revision": "ad74873bd7c17f09f48ea88484c83370"
  },
  {
    "url": "assets/js/14.6d9ec28e.js",
    "revision": "0bba041ca89100dd077989a33597d323"
  },
  {
    "url": "assets/js/15.91267843.js",
    "revision": "e624959fc8d2f0b865899df4b0f61b19"
  },
  {
    "url": "assets/js/16.7a6dd0d7.js",
    "revision": "428e70a2bd674c5fa37080098e50f080"
  },
  {
    "url": "assets/js/17.915f9bf4.js",
    "revision": "7e3dd8fd3afb056a41fcf08caf5db271"
  },
  {
    "url": "assets/js/18.c3dded30.js",
    "revision": "9f8f9ba4c58eecc31ad1a14b71c8a58b"
  },
  {
    "url": "assets/js/19.323d3734.js",
    "revision": "37c2797d01a303bc749362dc3e2c86b5"
  },
  {
    "url": "assets/js/2.ad118442.js",
    "revision": "b04cee3001f8beb7f4999cfcc7f03194"
  },
  {
    "url": "assets/js/20.e258b010.js",
    "revision": "534b06780092d984e4d27fc3e12f2082"
  },
  {
    "url": "assets/js/3.c2e9e265.js",
    "revision": "c7de092e332a8dbb4655c029107cde75"
  },
  {
    "url": "assets/js/4.08dc22be.js",
    "revision": "4cbfdbb6cdb9a672571d0bd870b38cd5"
  },
  {
    "url": "assets/js/5.d1742955.js",
    "revision": "06e17404b283876e10a1728541f2811e"
  },
  {
    "url": "assets/js/6.37e0f7a7.js",
    "revision": "e2606ec46ddb8b2edf9a1421b4545484"
  },
  {
    "url": "assets/js/7.d5b420f4.js",
    "revision": "372a31ecd38d9aca014ecaea08a9b8d0"
  },
  {
    "url": "assets/js/8.8cd46682.js",
    "revision": "76d7fc52b11f74e3ec5480c446057b94"
  },
  {
    "url": "assets/js/9.39e3850c.js",
    "revision": "1d1ca80c11b93f65b84d9f92c8ad7973"
  },
  {
    "url": "assets/js/app.b57f1ce9.js",
    "revision": "bf0ffe0c9a2acddf52dc75898c6cec03"
  },
  {
    "url": "guide.html",
    "revision": "49ce78638ef2e339b6cbf96814f3b920"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/gitcommit.jpg",
    "revision": "40f73e9e8c183461bada9b09dd93981d"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "db980f1b0aeef25391a133e382decf25"
  },
  {
    "url": "others/1.html",
    "revision": "a316d0c75116d057d16504501ad4ffa4"
  },
  {
    "url": "others/index.html",
    "revision": "911856397ac1db44ac0a8ecbc2319c8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
