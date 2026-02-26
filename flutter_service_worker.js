'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "049f0c990ee68dc31d25d125d7399c66",
"version.json": "4096e0d8725fbb2ba34930a7e7784279",
"favicon.ico": "29e224d7c5e973b2ca481c8874b566ae",
"index.html": "744cc70687763c98fde6174607ed15ed",
"/": "744cc70687763c98fde6174607ed15ed",
"main.dart.js": "42267c9e066c7a25e5e6d0f28fab19ae",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14598a92bf05702fe10c077b3aa55347",
".git/AUTO_MERGE": "7e14d492c0e8c211df872ac8178ed0e0",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "86a87e3011d44c1ac57d0829a0967f09",
".git/MERGE_MSG": "a729d665c2e0f0506c4ef7db0923d117",
".git/config": "4904687f3888e846cf008f939ce76893",
".git/objects/61/bdb7cdf3cd481b24fa389c88c008fcd91c699f": "bd3907e007048deb87ca235127adbddb",
".git/objects/66/8cfab31905cc053a76d12200685b7bbd6441dc": "0b2db5bc9ea79c0f54b3d06d38daa0d2",
".git/objects/57/48dd46191ff400fd6114817a067722e06ca272": "37774ed3a8d7e32c890862e79e7725b9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/d0e462fa7ec99ba02c1e90436b20c6b3068fef": "4b0327a1dbb5ad645f214ce35a39a2f0",
".git/objects/69/ccaa5b24102bafd3ea98b77a0bcf132072829c": "855792bd6c0a282ac8f7964a0b14d69f",
".git/objects/ac/80bb97959ebbea9f7c1b4af7d2ffe3e78cca68": "d5aae0ba0e6c9dbd9fe253322972bd10",
".git/objects/bb/d13de74633f58a93c61a4ac920fc99859ea302": "103eee604d49dfbc9fbf4d319a5a18d7",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/f7130348f35d2b47079f5f487607792b147edb": "9eee92085ed5f0ae94aecae47b449815",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/0e0bc56ab4fd16a40a12889331315080a29e41": "30710732db9f473130a1d1cc31734a8e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/ab/f04aea1f3883a0ac3ac662a4f627f1f46b2882": "82aebd709fbb10df7ff0c8826dcab4be",
".git/objects/e5/b538d16825f4e93b5c9ae89195fb405a5e3c63": "72e95c2e51510d99f53feb5a23339e70",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ba5140ecaf771e36a9e12dff1a2452ef38c08f": "952f4279acd6d55aba5fe3c41119ba4e",
".git/objects/ee/72732103009a7bdcd9219a027344c04331283e": "8bf164fac8c0ee6348295c52591e16f8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/pack/pack-59821bbb0ca185d31425c642a77fb8f68f0d8fea.rev": "cd97e3ddb44704999ebf277aedecbf6b",
".git/objects/pack/pack-59821bbb0ca185d31425c642a77fb8f68f0d8fea.pack": "ffa82f292c1f1a20a1aaad8c6fa11899",
".git/objects/pack/pack-59821bbb0ca185d31425c642a77fb8f68f0d8fea.idx": "eade7fa7153668c484113ac11f75bb20",
".git/objects/7d/2466774d1e99f82cd98687494ee1c488b2abaf": "b1e8e867aa3dd3874eb5c5e0a937f771",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7b/fdb6be5bf98f8e41988b5496f2af096305afe1": "cdc0dda9b13bc92efcd634df8b740941",
".git/objects/4c/f5b7f484f5f9307bb8ce2819a533daff9b21d2": "f6a077aeed3578b2f402810e946d7a63",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/81/45d890f8cdccf3e13c866755a4d1d23ee71f84": "00a9776578931437d2177fad243b3daf",
".git/objects/86/d01b7d0d1a261e6aedf8df972d836d239dbbe6": "5ccac9e97aa34df2eab500f584d1e8e5",
".git/objects/2a/814ee4e8830926ef3f03c8d37f9f12c5122e44": "22b3a82035039ee4dab86da05558ee61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/d673212a0bb8768c87069ae14b18305abaded3": "0dbec00c60e19421f9fedda78d552687",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/285bc408e23eff288c9858b492f4d88ed36b96": "b994d9ca77b2b4c583884e2a112c6bec",
".git/objects/64/b6bb04b9f1036c8b2f30031045454edc527eea": "ea869b6f7deada91641dd2ac48fc7aee",
".git/objects/90/e8e08dd4d653d3eb5f58b17bc511984a83f193": "d95a0c8f1c67f0d52408fdce0449f73b",
".git/objects/d3/64580448567b2adb7c5947f5b93e426d3dea2b": "39b756c46b4b097704e1b6c9a808c5ab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/07bf9809da3fdb3300bc8ca5d8e096113b5390": "b6ddfc60bb6da9a34e72d1f48630f255",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d5/d4e0ba14374974b61b76d19828fe983d0b22af": "248c2b967be7f0bde60f38cb22cb10c9",
".git/objects/aa/a289d90faddeb60e8486a7328bf58b17961173": "4e3df2c70350af6edb16e0a4032e24d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/31e4a72e1b759e8d1743bc14fb1a3b5448dc9d": "4dc86d25c2877632ac556b2839531aff",
".git/objects/a1/54a44c4604408537011e93a619583b22562043": "854706edb6af00b4978716d9805703ea",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e1/388ee2af83de7825a55739b23aced970b652b5": "8ad77f84e920dcc2b4786c059272cb5c",
".git/objects/f0/c6fbed0ece3861face5da32878e2f51c639c28": "52089fd96ced79de078747607e5ea99f",
".git/objects/f7/35861648c837447dd5e4342a2f5ebfb4824cdb": "86c9c96a7be1a4e0992f1b88667c7ff5",
".git/objects/c2/15e867c152465d586ea1cb7194f6fd6da46d7c": "df0c9ae502c1bf1b27d4677d3df1866a",
".git/objects/f6/f1fb5f6d1d1ed1240e9200a3f0967637327f7e": "ab3ea33ede2eeb19a91eb301f8501f2d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/79/54ad528f181b5425512ecd00a2aadc95df2d12": "4c755c901f0412cc557a95555b88f1f9",
".git/objects/2d/15bf874796e7d67ebf225a9b2f10d50c5b2a68": "eb53c972af610661b10fccc52b3239f4",
".git/objects/77/6427dcb93eb3572f9407965784c89de92dded5": "6704ec4a48bdd374ee6634d227a02875",
".git/objects/4a/0c2f620463e37d67056b152071825ce5109bcc": "14854ed6f2475dcd6f4f4052b38353e5",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/0f24965eb9ac41304fea4e52291df7d1a42bb0": "03fbe3b8882d69605b01a9188c234e1e",
".git/objects/85/a7c2714666b89e70a10ce0cc344d76d349682a": "25f591f444f480fea2d1ae4f124ea1e8",
".git/objects/1c/613855cd80ca5a630893023b444004eb623bc8": "824a4c3a358d02543449a730f751f897",
".git/objects/40/127774dc41fa41b26996a5602a6c89b073b5a0": "6b3318cb4dd1e666eaebe8bb2aa0cc78",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/80d97de072715127ed151b7ff9e700b9c07a18": "ca5eb6cbe441d928ea5a14ad94a68758",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b7dc155731efb66ef63da624de04d5f",
".git/logs/refs/heads/main": "8b7dc155731efb66ef63da624de04d5f",
".git/logs/refs/remotes/origin/HEAD": "896ee13ebfd3ff45893e1d8e914aa5e9",
".git/logs/refs/remotes/origin/main": "6d9eaa7162b0000811af0b1fb38e7e3a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "86a87e3011d44c1ac57d0829a0967f09",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a4ff86452695801b5b3f842754f8bdb2",
".git/index": "05de736ae1ac57ba76574c05aa571aac",
".git/MERGE_HEAD": "a4ff86452695801b5b3f842754f8bdb2",
".git/COMMIT_EDITMSG": "f1f699cc50875ee2c0900047cb785521",
".git/FETCH_HEAD": "a7e45c13b650c774fe86be6b860f921f",
"assets/AssetManifest.json": "03ef5bf49b500dad9f3a1fbc0486a054",
"assets/NOTICES": "23459da25efc553b9d86363bcfa210d8",
"assets/FontManifest.json": "71799cf577402abaedc9a1ff5120c7c7",
"assets/AssetManifest.bin.json": "a079028b7da13b253f0b2fe6629c9755",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "178463a87f80d42b0ea36fb3926e85f9",
"assets/fonts/MaterialIcons-Regular.otf": "86b1c4b425baeea141a74ead3decd1e8",
"assets/assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/assets/fonts/NotoSansJP-Light.otf": "137761c9e4b05edc375b06c256e9b65a",
"assets/assets/fonts/NotoSansJP-Thin.otf": "e2b92248795c0cd02d9858aaf2a12ec2",
"assets/assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/assets/fonts/NotoSansJP-Black.otf": "5ce4631ec833cd0011936d5653fbd144",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
