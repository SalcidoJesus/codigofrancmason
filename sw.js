
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_francmason',
  urlsToCache = [
    './',
    './estilos.css',
    './index.html',
    './script.js',
    './img/favicon.png',
    './img/gallo.ico',
    './img/gallocontenis.jpg',
    './img/icon_32.png',
    './img/icon_64.png',
    './img/icon_96.png',
    './img/icon_128.png',
    './img/icon_192.png',
    './img/icon_256.png',
    './img/icon_384.png',
    './img/icon_512.png',
    './img/icon_1024.png',
    './img/codigos/a.jpg',
    './img/codigos/b.jpg',
    './img/codigos/c.jpg',
    './img/codigos/d.jpg',
    './img/codigos/e.jpg',
    './img/codigos/f.jpg',
    './img/codigos/g.jpg',
    './img/codigos/h.jpg',
    './img/codigos/i.jpg',
    './img/codigos/j.jpg',
    './img/codigos/k.jpg',
    './img/codigos/l.jpg',
    './img/codigos/m.jpg',
    './img/codigos/n.jpg',
    './img/codigos/o.jpg',
    './img/codigos/p.jpg',
    './img/codigos/q.jpg',
    './img/codigos/r.jpg',
    './img/codigos/s.jpg',
    './img/codigos/t.jpg',
    './img/codigos/u.jpg',
    './img/codigos/v.jpg',
    './img/codigos/w.jpg',
    './img/codigos/x.jpg',
    './img/codigos/y.jpg',
    './img/codigos/z.jpg',
    
  ]
  
//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('install', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
