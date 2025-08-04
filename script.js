// Hide navbar on scroll for mobile devices
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only apply on mobile devices (screen width < 768px)
        if (window.innerWidth < 768) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide navbar
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling up - show navbar
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            // On desktop, always show navbar
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // Show navbar when user stops scrolling
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (window.innerWidth < 768) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                navbar.classList.remove('navbar-hidden');
            }, 1000); // Show navbar after 1 second of no scrolling
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

if (sections.length > 0 && navItems.length > 0) {
    window.addEventListener('scroll', updateActiveNavLink);
}

// Portfolio item click handlers
const portfolioItems = document.querySelectorAll('.portfolio-item');
    
portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Prevent click if clicking on links
        if (e.target.tagName === 'A') {
            return;
        }
        
        // Add click effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
    
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
        
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300/CCCCCC/666666?text=صورة+غير+متوفرة';
    });
});

// Typing effect for the name (only if language is Arabic)
const nameElement = document.querySelector('.name');
if (nameElement && document.documentElement.lang === 'ar') {
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Add hover effects for contact cards
const contactCards = document.querySelectorAll('.contact-card');
    
contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
        
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add skill level animation
const skillItems = document.querySelectorAll('.skill-item');
    
skillItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, index * 100);
});

// Add portfolio filter functionality (if needed in the future)
function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.opacity = '1';
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });
}

// Add contact form functionality (if needed)
function handleContactForm(event) {
    event.preventDefault();
    
    // Add your contact form logic here
    console.log('Contact form submitted');
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'تم إرسال الرسالة بنجاح!';
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Add CSS for slideIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .nav-link.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }
`;
document.head.appendChild(style);

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;
    
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});
    
scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Language Toggle Functionality
let currentLanguage = 'ar'; // Default language

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-ar][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
    
    // Update button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = langText.getAttribute(`data-${currentLanguage}`);
        }
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Reload project details if on project details page
    if (typeof loadProjectDetails === 'function') {
        loadProjectDetails();
    }
}

// Initialize language toggle
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== 'ar') {
        currentLanguage = savedLanguage;
        toggleLanguage();
    }
    
    // Add event listener to language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// Add loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
        
    loadingScreen.innerHTML = `
        <div style="text-align: center; color: white;">
            <div class="loading" style="margin: 0 auto 20px;"></div>
            <h2 data-ar="جاري التحميل..." data-en="Loading...">جاري التحميل...</h2>
        </div>
    `;
        
    document.body.appendChild(loadingScreen);
        
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
}); 