document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('main');
    const triggerZoneWidth = 75;
    const navbarWidth = '220px';
    let timeout;

    document.addEventListener('mousemove', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (e.clientX <= triggerZoneWidth) {
                navbar.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = navbarWidth; 
            } else if (e.clientX >= 220) {
                navbar.style.transform = 'translateX(-70%)';
                mainContent.style.marginLeft = '0';
            }
        }, 10); 
    });
});
