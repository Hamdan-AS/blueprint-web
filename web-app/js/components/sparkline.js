import { WEEKDAY_NAMES } from '../dates.js';

export function renderSparkline(host, days) {
  host.textContent = '';
  const max = Math.max(1, ...days.map((d) => d.count));
  const wrap = document.createElement('div');
  wrap.className = 'sparkline';

  for (const d of days) {
    const col = document.createElement('div');
    col.className = 'spark-col';
    const bar = document.createElement('div');
    bar.className = 'spark-bar' + (d.count ? ' has' : '');
    bar.title = `${d.iso} · ${d.count} done`;
    bar.style.height = `${Math.max(4, Math.round((d.count / max) * 100))}%`;
    col.append(bar);
    const lab = document.createElement('span');
    lab.className = 'spark-day';
    lab.textContent = WEEKDAY_NAMES[d.date.getDay()];
    col.append(lab);
    wrap.append(col);
  }

  host.append(wrap);
}
