let currentDrawer = null;
let escapeHandler = null;
let previousFocus = null;

function drawerHost() {
  let host = document.getElementById('drawer-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'drawer-host';
    document.body.appendChild(host);
  }
  return host;
}

export function openDrawer({ title, subtitle, content }) {
  if (currentDrawer) closeDrawer();
  previousFocus = document.activeElement;

  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';

  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');

  const head = document.createElement('div');
  head.className = 'drawer-head';

  const titleEl = document.createElement('div');
  titleEl.className = 'drawer-title';
  titleEl.id = `drawer-title-${Date.now()}`;
  titleEl.textContent = title || '';
  drawer.setAttribute('aria-labelledby', titleEl.id);

  const subEl = document.createElement('div');
  subEl.className = 'drawer-sub';
  subEl.textContent = subtitle || '';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '\u00d7';

  const body = document.createElement('div');
  body.className = 'drawer-body';
  body.appendChild(content);

  head.appendChild(titleEl);
  head.appendChild(subEl);
  head.appendChild(closeBtn);
  drawer.appendChild(head);
  drawer.appendChild(body);

  const host = drawerHost();
  host.appendChild(backdrop);
  host.appendChild(drawer);

  const ref = { backdrop, drawer };

  const doClose = () => {
    if (currentDrawer !== ref) return;
    closeDrawer();
  };

  backdrop.addEventListener('click', doClose);
  closeBtn.addEventListener('click', doClose);
  escapeHandler = (e) => {
    if (e.key === 'Escape') doClose();
    if (e.key === 'Tab') {
      const focusable = [...drawer.querySelectorAll('button,a[href],input,select,[tabindex]:not([tabindex="-1"])')]
        .filter((node) => !node.disabled && !node.hidden);
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  document.addEventListener('keydown', escapeHandler);

  void backdrop.offsetHeight;
  backdrop.classList.add('open');
  drawer.classList.add('open');

  currentDrawer = ref;
  closeBtn.focus();
}

export function closeDrawer() {
  if (!currentDrawer) return;
  const ref = currentDrawer;
  currentDrawer = null;
  if (escapeHandler) {
    document.removeEventListener('keydown', escapeHandler);
    escapeHandler = null;
  }
  ref.backdrop.classList.remove('open');
  ref.drawer.classList.remove('open');
  setTimeout(() => {
    ref.backdrop.remove();
    ref.drawer.remove();
  }, 220);
  previousFocus?.focus?.();
  previousFocus = null;
}
