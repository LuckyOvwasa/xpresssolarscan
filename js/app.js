// ═══════════════════════════════════════════════════════════════
// XPRESS SOLAR — PRODUCT INFO APP (Scanner Target)
// Renders product details from URL slug, no cart/checkout.
// ═══════════════════════════════════════════════════════════════

let currentProduct = null;

// ─── Toast ────────────────────────────────────────────────────
let toastTimeout;
function showToast(msg, duration = 2200) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
}

// ─── Modal helpers ────────────────────────────────────────────
function openPaymentModal() {
  if (!currentProduct) return;
  // Update amount + WhatsApp link
  document.getElementById('transferAmount').textContent = formatNGN(currentProduct.price);
  const waUrl = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
    `Hi Xpress Solar, I have made a transfer for ${currentProduct.name} (${currentProduct.sku}) — ${formatNGN(currentProduct.price)}. Here is my receipt:`
  )}`;
  document.getElementById('whatsappReceiptBtn').href = waUrl;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('paymentModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('paymentModal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyAccount() {
  const accountNumber = SHOP.accountNumber;
  const btn = event.target;
  navigator.clipboard.writeText(accountNumber).then(() => {
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    showToast('Account number copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const tmp = document.createElement('input');
    tmp.value = accountNumber;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    showToast('Account number copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ─── Routing ──────────────────────────────────────────────────
function getSlugFromURL() {
  // Support both #/lf280k... and ?p=lf280k... for flexibility
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash) return hash;
  const params = new URLSearchParams(window.location.search);
  return params.get('p') || params.get('product') || '';
}

function render() {
  const slug = getSlugFromURL();
  const app = document.getElementById('app');

  // No product specified — show landing/welcome
  if (!slug) {
    app.innerHTML = renderWelcome();
    return;
  }

  const product = getProduct(slug);
  if (!product) {
    app.innerHTML = renderNotFound();
    return;
  }

  currentProduct = product;
  app.innerHTML = renderProduct(product);
}

// ─── Welcome / landing (when no product slug) ─────────────────
function renderWelcome() {
  return `
    <div class="verified-bar">
      <div class="verified-brand">
        <div class="verified-mark">☀</div>
        <div class="verified-name">
          ${SHOP.name}
          <small>Powering Nigeria</small>
        </div>
      </div>
    </div>
    <div class="error-state">
      <div class="error-icon">📷</div>
      <h2>Scan a Product QR Code</h2>
      <p>To view product details, please scan the QR code on the product you're interested in at our shop.</p>
      <div style="display:flex;gap:8px;margin-top:16px;">
        <a href="https://wa.me/${SHOP.whatsapp}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">💬 WhatsApp Us</a>
        <a href="tel:${SHOP.phone.replace(/\s/g,'')}" class="btn btn-secondary btn-sm">📞 Call</a>
      </div>
    </div>
    <div class="footer-mini">
      <span class="copy">© 2026 ${SHOP.name}</span>
    </div>
  `;
}

// ─── 404 ──────────────────────────────────────────────────────
function renderNotFound() {
  return `
    <div class="verified-bar">
      <div class="verified-brand">
        <div class="verified-mark">☀</div>
        <div class="verified-name">
          ${SHOP.name}
          <small>Powering Nigeria</small>
        </div>
      </div>
    </div>
    <div class="error-state">
      <div class="error-icon">⚠️</div>
      <h2>Product Not Found</h2>
      <p>This QR code doesn't match any product in our catalog. Please ask a staff member for assistance.</p>
      <div style="display:flex;gap:8px;margin-top:16px;">
        <a href="https://wa.me/${SHOP.whatsapp}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">💬 WhatsApp Us</a>
        <a href="tel:${SHOP.phone.replace(/\s/g,'')}" class="btn btn-secondary btn-sm">📞 Call Us</a>
      </div>
    </div>
    <div class="footer-mini">
      <span class="copy">© 2026 ${SHOP.name}</span>
    </div>
  `;
}

// ─── Product page ─────────────────────────────────────────────
function renderProduct(p) {
  const updatedDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  return `
    <!-- Verified bar -->
    <div class="verified-bar">
      <div class="verified-brand">
        <div class="verified-mark">☀</div>
        <div class="verified-name">
          ${SHOP.name}
          <small>${SHOP.tagline}</small>
        </div>
      </div>
      <span class="verified-pill">Verified</span>
    </div>

    <!-- Hero image -->
    <div class="product-hero">
      <span class="product-hero-emoji">${p.image}</span>
    </div>

    <!-- Product body -->
    <div class="product-body">
      <header class="product-header">
        <div class="product-meta">
          <span class="product-brand">${p.brand.toUpperCase()}</span>
          <span class="product-meta-sep"></span>
          <span class="product-sku">SKU: ${p.sku}</span>
        </div>
        <h1 class="product-name">${p.name}</h1>
        <p class="product-subtitle">${p.subtitle}</p>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.round(p.rating))}</span>
          <span class="score">${p.rating}</span>
          <span class="count">(${p.reviewCount} reviews)</span>
        </div>
      </header>

      <!-- Price -->
      <div class="price-card">
        <div class="price-row">
          <span class="price-current">${formatNGN(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatNGN(p.oldPrice)}</span>` : ''}
          ${p.oldPrice ? `<span class="price-discount">Save ${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>` : ''}
        </div>
        <p class="price-note">Ask a staff member to ring you up at the counter.</p>
      </div>

      <!-- Quick stats -->
      <div class="stats-row">
        ${p.stats.map(s => `
          <div class="stat-card ${s.color || ''}">
            <strong>${s.value}</strong>
            <span>${s.label}</span>
          </div>
        `).join('')}
      </div>

      <!-- Description -->
      <div class="card">
        <h3>Description</h3>
        <p class="card-description">${p.description}</p>
      </div>

      <!-- Specs -->
      <div class="card">
        <h3>Specifications</h3>
        ${p.specs.map(([label, value]) => `
          <div class="spec-row">
            <span class="label">${label}</span>
            <span class="value">${value}</span>
          </div>
        `).join('')}
      </div>

      <!-- Compatibility -->
      ${p.compatibility && p.compatibility.length > 0 ? `
        <div class="card">
          <h3>Compatible With</h3>
          <div class="chip-grid">
            ${p.compatibility.map(c => `<span class="chip">${c}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Included -->
      ${p.included && p.included.length > 0 ? `
        <div class="card">
          <h3>What's Included</h3>
          <div class="included-list">
            ${p.included.map(item => `
              <div class="included-item">
                <span class="included-check">✓</span>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Warranty -->
      ${p.warranty && p.warranty.length > 0 ? `
        <div class="card">
          <h3>Warranty & Support</h3>
          ${p.warranty.map(([label, value]) => `
            <div class="spec-row">
              <span class="label">${label}</span>
              <span class="value">${value}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Reviews (if any) -->
      ${p.reviews && p.reviews.length > 0 ? `
        <div class="card">
          <h3>Customer Reviews</h3>
          ${p.reviews.map(r => `
            <div class="review-item">
              <div class="review-head">
                <span class="review-name">${r.name}</span>
                <span class="review-date">${r.date}</span>
              </div>
              <div class="review-stars">${'★'.repeat(r.stars)}</div>
              <p class="review-text">${r.text}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Action buttons -->
      <div class="action-area-inner">
        <button class="btn btn-primary btn-block" onclick="openPaymentModal()">
          🏦 Pay by Bank Transfer
        </button>
        <a href="https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${p.name} (${p.sku})`)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block">
          💬 Ask a Question on WhatsApp
        </a>
      </div>

      <!-- Help card -->
      <div class="help-card">
        <h4>Need help with this product?</h4>
        <p>Speak to a staff member at the counter or contact us anytime.</p>
        <div class="actions">
          <a href="tel:${SHOP.phone.replace(/\s/g, '')}">📞 ${SHOP.phone}</a>
          <a href="https://wa.me/${SHOP.whatsapp}" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
      </div>

      <div class="footer-mini">
        <span class="updated">Last updated: ${updatedDate}</span>
        <span class="copy">© 2026 ${SHOP.name} · Lagos, Nigeria</span>
      </div>
    </div>
  `;
}

// ─── Init ─────────────────────────────────────────────────────
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', () => {
  // Tiny delay so loader is briefly seen (feels intentional, not flash)
  setTimeout(render, 200);
  // ESC key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
