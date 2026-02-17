
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    // Menü schließen wenn Link geklickt wird
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.textContent = "☰";
        });
    });

    // Menü schließen beim Scrollen
    window.addEventListener('scroll', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggle.textContent = "☰";
        }
    });
});

