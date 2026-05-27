function toggleMobileMenu() {
    const menu = document.getElementById('mobileNavMenu');
    const overlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('closeNavMenuBtn');

    if (!menu || !overlay) return;

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileNavMenu');
    const overlay = document.getElementById('mobileNavOverlay');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Закрытие по клику на крестик и оверлей
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeNavMenuBtn');
    const overlay = document.getElementById('mobileNavOverlay');
    if (closeBtn) closeBtn.onclick = closeMobileMenu;
    if (overlay) overlay.onclick = closeMobileMenu;
});