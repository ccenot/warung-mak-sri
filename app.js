/**
 * ===================================================================
 * MAK SRI KITCHEN - APPLICATION LOGIC
 * ===================================================================
 */

let activeCategory = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMenu();
  initFAQ();
});

// 1. Navigation & Scroll
function initNavbar() {
  const header = document.querySelector('.nav-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking any nav link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
}

function getActiveMenuItems() {
  try {
    const saved = localStorage.getItem('mak_sri_menu_items');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Gagal membaca custom menu dari localStorage:', e);
  }
  return typeof MENU_ITEMS !== 'undefined' ? MENU_ITEMS : [];
}

// 2. Menu Rendering & Filtering
function initMenu() {
  const menuContainer = document.getElementById('menu-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('menu-search');

  function updateMenuCount() {
    const allBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (allBtn) {
      allBtn.textContent = `Semua Menu (${getActiveMenuItems().length})`;
    }
  }
  updateMenuCount();

  function render() {
    if (!menuContainer) return;

    let items = getActiveMenuItems();

    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; color: var(--ink-500);">
          <div style="font-size: 42px; margin-bottom: 10px;">🍗</div>
          <h4 style="font-size: 18px; margin-bottom: 6px; color: var(--ink-900);">Menu tidak ditemukan</h4>
          <p style="font-size: 14px;">Coba gunakan kata kunci pencarian yang lain.</p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = items.map(item => `
      <div class="menu-card" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="card-tag ${item.tagClass}">${item.badge}</span>
          <span class="card-spice-level">${item.spiceLevel}</span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <div class="card-price">
              <span class="price-currency">Harga</span>
              <span class="price-amount">Rp ${item.price.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      render();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  render();
}

// 3. FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}
