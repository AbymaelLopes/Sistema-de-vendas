// Define um nome e uma versão para o cache
const CACHE_NAME = 'gestao-vendas-cache-v4'; // Versão incrementada para forçar a atualização

// Lista de ficheiros essenciais para a aplicação funcionar offline.
// Os links CDN foram removidos para evitar erros de CORS no ambiente de desenvolvimento.
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json' 
];

// Evento 'install': é acionado quando o service worker é instalado
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto e ficheiros essenciais guardados.');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Força o novo service worker a ativar-se
  );
});

// Evento 'fetch': é acionado para cada pedido que a página faz
self.addEventListener('fetch', event => {
  // Ignora pedidos que não sejam do tipo GET
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    // Tenta encontrar o pedido no cache primeiro (estratégia Cache First)
    caches.match(event.request)
      .then(response => {
        // Se encontrar no cache, retorna a resposta do cache.
        if (response) {
          return response;
        }

        // Se não encontrar, faz o pedido à rede.
        return fetch(event.request).then(networkResponse => {
            // Se o pedido à rede for bem-sucedido, guarda uma cópia no cache para uso futuro
            if(networkResponse && networkResponse.status === 200) {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
        });

      }).catch(error => {
        console.error("Fetch falhou; retornando offline page se disponível.", error);
        // Pode adicionar aqui uma página de fallback offline se desejar
      })
  );
});

// Evento 'activate': limpa caches antigos se uma nova versão for ativada
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Apaga caches com nome diferente do atual
            console.log('A apagar cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim()) // Torna este service worker o controlador para todas as abas abertas
  );
});

