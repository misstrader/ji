// تنظیمات اولیه
document.addEventListener('DOMContentLoaded', function() {
    // فعال کردن کارت‌های tilt
    const tiltElements = document.querySelectorAll('.tilt');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
    
    // فعال کردن دکمه تغییر زبان
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            document.documentElement.lang = document.documentElement.lang === 'fa' ? 'en' : 'fa';
            document.documentElement.dir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
            this.textContent = document.documentElement.lang === 'fa' ? 'EN/FA' : 'FA/EN';
        });
    }
    
    // فعال کردن پخش ویدئو
    const videoPlayer = document.querySelector('.video-player');
    const playButton = document.querySelector('.play-button');
    const video = document.querySelector('video');
    
    if (playButton && video) {
        playButton.addEventListener('click', function() {
            videoPlayer.classList.add('playing');
            video.play();
            playButton.style.display = 'none';
        });
        
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'block';
            }
        });
    }
});
