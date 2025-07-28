document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Video Card Hover Effect
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // Background Audio Toggle
    const audio = document.getElementById('eroticAudio');
    const audioToggle = document.createElement('div');
    audioToggle.className = 'audio-toggle';
    audioToggle.innerHTML = '<i class="icon-audio"></i>';
    audioToggle.style.position = 'fixed';
    audioToggle.style.bottom = '20px';
    audioToggle.style.right = '20px';
    audioToggle.style.width = '50px';
    audioToggle.style.height = '50px';
    audioToggle.style.backgroundColor = 'var(--primary-color)';
    audioToggle.style.borderRadius = '50%';
    audioToggle.style.display = 'flex';
    audioToggle.style.alignItems = 'center';
    audioToggle.style.justifyContent = 'center';
    audioToggle.style.cursor = 'pointer';
    audioToggle.style.zIndex = '1000';
    audioToggle.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(audioToggle);

    // Audio toggle functionality
    let audioEnabled = false;
    audioToggle.addEventListener('click', function() {
        audioEnabled = !audioEnabled;
        audio.muted = !audioEnabled;
        this.innerHTML = audioEnabled ? '<i class="icon-audio-on"></i>' : '<i class="icon-audio-off"></i>';
        
        // Add some styles for visual feedback
        if (audioEnabled) {
            this.style.backgroundColor = 'var(--secondary-color)';
            this.style.color = 'var(--dark-color)';
        } else {
            this.style.backgroundColor = 'var(--primary-color)';
            this.style.color = 'var(--text-color)';
        }
    });

    // Try to autoplay audio (will be muted by default)
    document.addEventListener('click', function initAudio() {
        audio.play().catch(e => console.log('Audio autoplay prevented:', e));
        document.removeEventListener('click', initAudio);
    });

    // Fake views/likes increment (for demo purposes)
    setInterval(() => {
        const views = document.querySelectorAll('.views');
        const likes = document.querySelectorAll('.likes');
        
        views.forEach(view => {
            const current = parseInt(view.textContent.replace(/\D/g, ''));
            view.textContent = `${(current + Math.floor(Math.random() * 10)).toLocaleString()} views`;
        });
        
        likes.forEach(like => {
            const current = parseInt(like.textContent.replace(/\D/g, ''));
            like.textContent = `${(current + Math.floor(Math.random() * 5)).toLocaleString()} likes`;
        });
    }, 10000);
});