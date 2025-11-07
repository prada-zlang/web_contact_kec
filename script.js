document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');

  // === Toggle Sidebar ===
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      menuBtn.classList.toggle('active');
    });
  }

  // === Tutup sidebar saat klik di luar ===
  document.addEventListener('click', (e) => {
    if (
      sidebar.classList.contains('show') &&
      !sidebar.contains(e.target) &&
      e.target !== menuBtn
    ) {
      sidebar.classList.remove('show');
      menuBtn.classList.remove('active');
    }
  });

  // === Efek klik kontak item ===
  document.querySelectorAll('.kontak-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('clicked');
      setTimeout(() => item.classList.remove('clicked'), 300);
    });
  });

  // === Efek Fade-in halaman ===
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease-in-out';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 50);

  // === Tandai link aktif di sidebar ===
  const currentPage = location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // === Tambahkan kelas fade-text ke section dan teks di dalamnya ===
  const textElements = document.querySelectorAll('.section, .section p');
  textElements.forEach(el => {
    el.classList.add('fade-text');
  });

  // === Efek Hover Ikon Sosial ===
  const socialLinks = document.querySelectorAll('.social-link, .social-icon, .kontak-item img');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'scale(1.08)';
      link.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });
});

// === Efek scroll: tampilkan section naik saat terlihat ===
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('fade-up');
    }
  });
});

// === Loading screen hilang setelah halaman dimuat ===
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hide');
  }, 2000); // hilang setelah 0.4 detik
});
