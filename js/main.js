// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// Form Handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('Asante! Ujumbe wako umetumwa. Nitawasiliana nawe hivi karibuni.');
            this.reset();
        });
    }
}

// Theme Toggle (Optional)
function initThemeToggle() {
    const themeBtn = document.createElement('button');
    themeBtn.textContent = '🌙';
    themeBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        font-size: 1.2rem;
    `;
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(themeBtn);
}

// Dark Theme Styles
const darkTheme = `
    <style>
    .dark-theme {
        --text-color: #ffffff;
        --light-bg: #1a1a1a;
        --white: #2d2d2d;
    }
    
    .dark-theme .navbar {
        background: var(--white);
    }
    </style>
`;
document.head.insertAdjacentHTML('beforeend', darkTheme);

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initContactForm();
    initThemeToggle();
    
    console.log('Portfolio website loaded successfully! 🚀');
});