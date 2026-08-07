export const VALID = ['today', 'week', 'course', 'shared', 'progress'];

export function parseHash(hash) {
  const h = (hash || location.hash || '#/today').replace(/^#/, '');
  const parts = h.split('/').filter(Boolean);
  if (!parts.length) return { name: 'today', params: {} };
  const name = parts[0].toLowerCase();
  if (name === 'week' && parts[1] && /^\d+$/.test(parts[1])) {
    return { name: 'week', params: { week: parseInt(parts[1], 10) } };
  }
  if (name === 'course') {
    return parts[1]
      ? { name: 'course', params: { code: parts[1].toUpperCase() } }
      : { name: 'course', params: {} };
  }
  if (VALID.includes(name)) return { name, params: {} };
  return { name: 'today', params: {} };
}

export function navigate(path) {
  if (location.hash !== path) location.hash = path;
}

export function onRouteChange(fn) {
  window.addEventListener('hashchange', () => fn(parseHash(location.hash)));
}
