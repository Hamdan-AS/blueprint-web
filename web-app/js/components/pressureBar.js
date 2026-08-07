import { pressureColor } from '../pressure.js';

export function pressureBar(label, pct) {
  const p = Math.min(1, Math.max(0, pct));
  const rounded = Math.round(p * 100);

  const wrap = document.createElement('div');
  wrap.className = 'pressure';

  const top = document.createElement('div');
  top.className = 'pressure-top';
  const name = document.createElement('span');
  name.className = 'pressure-label';
  name.textContent = label;
  const value = document.createElement('span');
  value.className = 'pressure-value';
  value.textContent = `${rounded}%`;
  top.append(name, value);

  const track = document.createElement('div');
  track.className = 'pressure-track';
  track.setAttribute('role', 'progressbar');
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', '100');
  track.setAttribute('aria-valuenow', String(rounded));
  track.setAttribute('aria-label', label);

  const fill = document.createElement('div');
  fill.className = 'pressure-fill';
  fill.style.width = `${rounded}%`;
  fill.style.background = pressureColor(p);
  track.append(fill);

  wrap.append(top, track);
  return wrap;
}
