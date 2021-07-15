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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "893ed08130c28d12b45873bfe2ba29b5"
  },
  {
    "url": "about/index.html",
    "revision": "9b9f41888185e6f18473e6e5ca48c9fa"
  },
  {
    "url": "assets/css/0.styles.57551526.css",
    "revision": "702f75689c1d0609480dc4c96cccab83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3dfffb1b.js",
    "revision": "ab5048ae9c8caaf89bf70e6ab36b57db"
  },
  {
    "url": "assets/js/11.a924cbe2.js",
    "revision": "d52364c6de91229f5a262717695fcaff"
  },
  {
    "url": "assets/js/12.27153596.js",
    "revision": "7d8553f8eb741ee0a41a05032a356068"
  },
  {
    "url": "assets/js/13.5ff3495c.js",
    "revision": "4a6dfe5e4b9223cf35422fe8c1969476"
  },
  {
    "url": "assets/js/14.b69fc5bf.js",
    "revision": "45c84b72c135cded7152c747c8a7fdad"
  },
  {
    "url": "assets/js/15.f1e8e2b2.js",
    "revision": "e1b6f7593c21a1ca2974f85570aaf5f1"
  },
  {
    "url": "assets/js/16.240a6104.js",
    "revision": "451aa2fef5a94649a0c1c3573f3982d2"
  },
  {
    "url": "assets/js/17.e56a5429.js",
    "revision": "06940185dd5f4f3299a470a39f6f4482"
  },
  {
    "url": "assets/js/18.f944c854.js",
    "revision": "d44998c12a3df4704a681410c5daa010"
  },
  {
    "url": "assets/js/19.9d789d2d.js",
    "revision": "4a9119bca7635691243358d54546a325"
  },
  {
    "url": "assets/js/2.c3ac2978.js",
    "revision": "a9eeb684a9e973a3b166c6f5bd6a1168"
  },
  {
    "url": "assets/js/20.48f9bd73.js",
    "revision": "0a1c5110d5de9d281a5246eb2d329a0f"
  },
  {
    "url": "assets/js/21.77420ca5.js",
    "revision": "f9550bcab16fa27a39601c0f14d07592"
  },
  {
    "url": "assets/js/22.3ee97634.js",
    "revision": "639862bc85cc0c1984ae586093ab2bcb"
  },
  {
    "url": "assets/js/23.34eecf44.js",
    "revision": "3b008a32456b554d6e329a9628c22a20"
  },
  {
    "url": "assets/js/24.f899ea68.js",
    "revision": "df85fca2da7e5e8619c8413fc289981b"
  },
  {
    "url": "assets/js/25.c48c4aa1.js",
    "revision": "82f83e59c4bd4b743d7ebc2628aced5f"
  },
  {
    "url": "assets/js/26.6608fa7c.js",
    "revision": "c2c67234f7e2e209f8cdcb264f06f44f"
  },
  {
    "url": "assets/js/27.d0fbb19c.js",
    "revision": "a1e846cc4d25612009ab6042beb4f574"
  },
  {
    "url": "assets/js/28.3f4bbfa2.js",
    "revision": "0b1c36c97ac9d109279f2c1cad24bb41"
  },
  {
    "url": "assets/js/29.30921551.js",
    "revision": "cc95dae0fcbb16741875a3cbc32f2876"
  },
  {
    "url": "assets/js/3.553b76f9.js",
    "revision": "1d791180f56c86487d65aa0893acec61"
  },
  {
    "url": "assets/js/30.c4eb723d.js",
    "revision": "664b34ea3da17afa6505685f93f3fbca"
  },
  {
    "url": "assets/js/31.520e2fd7.js",
    "revision": "231f8da57ae7b93b4759e79b4ba79a22"
  },
  {
    "url": "assets/js/32.bfaeec3d.js",
    "revision": "8841b8069e61675f7546e58ff80ecfcf"
  },
  {
    "url": "assets/js/33.0a491f7b.js",
    "revision": "a27dd9c4646a7b05202028c55283083e"
  },
  {
    "url": "assets/js/4.bdf48cb0.js",
    "revision": "21a1e0767658f0bd5b8286f820fb5cb9"
  },
  {
    "url": "assets/js/5.d1e0d085.js",
    "revision": "ef984db9b05763a54cc5cfff55de913c"
  },
  {
    "url": "assets/js/6.fb7fa333.js",
    "revision": "6abbb74acbfc6e0c5804867891b6b196"
  },
  {
    "url": "assets/js/7.bad1a29f.js",
    "revision": "7b8fba9dfd6ba4341a5cb490bb345c4a"
  },
  {
    "url": "assets/js/8.3fb1dbe3.js",
    "revision": "708c4c8c1062278d6555b1e997cf329f"
  },
  {
    "url": "assets/js/9.c955c5ca.js",
    "revision": "238fe0ad46bcb324eccfffa78f63a806"
  },
  {
    "url": "assets/js/app.cb2e0a91.js",
    "revision": "aafb13cd9868bfec053d5f6509f352b2"
  },
  {
    "url": "blog/basic-css.html",
    "revision": "62be144967b25111b1dd6d364db98519"
  },
  {
    "url": "blog/book-you-dont-know-js-1.html",
    "revision": "315961c1c27d77a50f18d169258daa34"
  },
  {
    "url": "blog/codiliy-BinaryGap.html",
    "revision": "c1dc0262fcb79363393936ac42de23d8"
  },
  {
    "url": "blog/error-report-ie11-script1002.html",
    "revision": "2ce9ef61f87f357125dd8d0b9d6baf95"
  },
  {
    "url": "blog/how-to-git-mulitple-account.html",
    "revision": "4bb99f04c029d2281890d23713aaad80"
  },
  {
    "url": "blog/how-to-private-npm.html",
    "revision": "f45a660093a082fa23b385715a6e4147"
  },
  {
    "url": "blog/how-to-vuecli3-vscode.html",
    "revision": "3cbd2d09de1fc551bf100fee4dc4a2cc"
  },
  {
    "url": "blog/index.html",
    "revision": "26df72199fad12310635d316537c9d4c"
  },
  {
    "url": "blog/making-trading-bot-1.html",
    "revision": "5b78879c2e1f9fb493cf6bf43705edd2"
  },
  {
    "url": "blog/making-trading-bot-2.html",
    "revision": "8b4022038920fa635de784595e592039"
  },
  {
    "url": "blog/making-trading-bot-3.html",
    "revision": "e59075faf2b9d405b88477e0fef654fe"
  },
  {
    "url": "blog/programmers-greedy-gemsuit.html",
    "revision": "7f48d0f85de789cd58169a08e4314ef1"
  },
  {
    "url": "blog/programmers-greedy-joystick.html",
    "revision": "4184520725c846e7f4acfa2f79f94490"
  },
  {
    "url": "blog/what-is-padding-hack.html",
    "revision": "a9a4b3244089eeaf4cb376f60c40822a"
  },
  {
    "url": "Developer-Associate.jpg",
    "revision": "63ca63b0fa17bcb421ce9566253d2eb0"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "img/20200107/main.jpg",
    "revision": "7a86f0db8ba5bb367f4152bdbbc7fe3f"
  },
  {
    "url": "img/20210425/01_sql.png",
    "revision": "6d347f8e0cfb09df6e9aee020c45a4fc"
  },
  {
    "url": "img/20210425/02_result.png",
    "revision": "c8fed134b21814d775a3b3afdd358b9c"
  },
  {
    "url": "img/20210426/01_code.png",
    "revision": "a257f1e5917fac08879d2ef3bab4cc5c"
  },
  {
    "url": "img/20210426/02_result.png",
    "revision": "6ce9b9ebf0f66516ff64ebc7202c8f8a"
  },
  {
    "url": "img/20210426/03_large_case.png",
    "revision": "9c2ae55cd105bfc427ce20ff3470dce8"
  },
  {
    "url": "img/20210502/happy-javascript.jpg",
    "revision": "ce5aca32c9222f93b996387c0322d24c"
  },
  {
    "url": "img/20210524/01.png",
    "revision": "b478f5afe3f6172576809ba9b052424b"
  },
  {
    "url": "img/20210525/01.png",
    "revision": "d9d490c3f8b7f22e2f1eda27cae46a64"
  },
  {
    "url": "img/tmp/01_trade.png",
    "revision": "848e0ca95457a078a94273b44ae845aa"
  },
  {
    "url": "index.html",
    "revision": "7d950bf58c54e4dc78b5d4f8836e1853"
  },
  {
    "url": "main.jpg",
    "revision": "7a86f0db8ba5bb367f4152bdbbc7fe3f"
  },
  {
    "url": "naverd0af24031866c2cb391f545d6da12043.html",
    "revision": "a800ca28210e3201c8e711db6f112060"
  },
  {
    "url": "npm-sinopia.png",
    "revision": "aebb7d1899543772792ab15e77b71c78"
  },
  {
    "url": "portfolio/goorm-goorm.html",
    "revision": "152eb12ba5636a308c347615a3b13c78"
  },
  {
    "url": "portfolio/index.html",
    "revision": "dd1adc27ddf7214e62aaf211eb36ee4d"
  },
  {
    "url": "portfolio/vue-datamaps.html",
    "revision": "3eed0bd41acab7e580dc5f0ebbbb71ea"
  },
  {
    "url": "portfolio/vue-pivottable.html",
    "revision": "a9cb8202819bc5c9c832c28dbf37e73a"
  },
  {
    "url": "vue-datamaps-demo-arcs.png",
    "revision": "fd2be11afe587e33f6b27d6e9df8dbe9"
  },
  {
    "url": "vue-datamaps-demo-aws-region.png",
    "revision": "7b3630185e668ecf20d63f77eea1cba6"
  },
  {
    "url": "vue-datamaps-demo-basic.png",
    "revision": "37ff25b5e3d43dfdde38efc7a5f3fd44"
  },
  {
    "url": "vue-datamaps-demo-bubbles.png",
    "revision": "50e0dbeff2f8b0c03c607d0f3022168d"
  },
  {
    "url": "vue-datamaps-demo-custom-color.png",
    "revision": "624d25c8585069038ac116ea408dcb8e"
  },
  {
    "url": "vue-datamaps-demo-graticules.png",
    "revision": "e3f3b61808b116ea7469bd78660f0f7e"
  },
  {
    "url": "vue-datamaps-demo-south-korea.png",
    "revision": "5addb7c8f683573f46308961b974c51a"
  },
  {
    "url": "vue-datamaps-demo-state-label.png",
    "revision": "304f80c2496471da8fe3572b2b571d23"
  },
  {
    "url": "vue-datamaps-demo-zoom.png",
    "revision": "793a8d7ef5fd67e308e05d968f629fb2"
  },
  {
    "url": "vue-datamaps-example.png",
    "revision": "58fcd13979744328e24bcc9e93ee51f4"
  },
  {
    "url": "vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  }
].concat(self.__precacheManifest || []);
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
