function update() {
  const pill = document.getElementById('network-pill');
  if (!pill) return;
  pill.textContent = navigator.onLine ? 'Online' : 'Offline';
  pill.classList.toggle('offline', !navigator.onLine);
  pill.title = navigator.onLine ? 'Network available' : 'Using cached content';
}
export async function initOffline() {
  update(); addEventListener('online', update); addEventListener('offline', update);
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  try {
    const local = location.hostname === '127.0.0.1' || location.hostname === 'localhost';
    if (local) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
      const pill = document.getElementById('network-pill');
      if (pill) pill.title = 'Live local files · offline cache disabled';
      return;
    }
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      location.reload();
    });
    const registration = await navigator.serviceWorker.register('../sw.js?v=4', { scope: '../' });
    await registration.update();
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data?.type !== 'CACHE_UPDATED') return;
      localStorage.setItem('blueprint-cache-updated', event.data.at);
      const pill = document.getElementById('network-pill');
      if (pill) pill.title = `Content cache updated ${new Date(event.data.at).toLocaleString()}`;
    });
  } catch (error) {
    const pill = document.getElementById('network-pill');
    if (pill) pill.title = `Offline cache unavailable: ${error.message}`;
  }
}
