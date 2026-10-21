// Service worker mínimo: permite instalar la página como app.
// No guarda copias: siempre pide la versión más reciente a internet,
// para que nunca se muestren datos viejos.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
