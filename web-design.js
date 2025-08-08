// CORRECTED Mobile Navigation - FIXED FOR MOBILE DEVICES
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    // Toggle mobile menu
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// CORRECTED Contact Button - STANDARD FUNCTIONALITY
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        // Add your contact functionality here
        console.log('Contact button clicked');
        // You can redirect or show contact form
        // window.location.href = 'contact.html';
    });
}

// Enhanced Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Design Showcase Interactions
document.addEventListener('DOMContentLoaded', () => {
    const designFrames = document.querySelectorAll('.design-frame');
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    // Add hover effects to design frames
    designFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.transform = 'scale(1.02) translateY(-5px)';
            frame.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.4)';
        });
        
        frame.addEventListener('mouseleave', () => {
            frame.style.transform = 'scale(1) translateY(0)';
            frame.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Interactive floating icons
    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.background = 'rgba(212, 175, 55, 0.2)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
            icon.style.background = 'rgba(212, 175, 55, 0.1)';
        });
    });
    
    // Animate design elements
    const designElements = document.querySelectorAll('.design-element');
    designElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(5px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 1500);
    });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%';
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Animate tool cards on scroll
const toolCards = document.querySelectorAll('.tool-card');
const toolObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

toolCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    toolObserver.observe(card);
});

// Animate feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease';
    featureObserver.observe(card);
});

// Animate benefit cards on scroll
const benefitCards = document.querySelectorAll('.benefit-card');
const benefitObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 120);
        }
    });
}, { threshold: 0.1 });

benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.7s ease';
    benefitObserver.observe(card);
});

// Animate timeline steps on scroll
const timelineSteps = document.querySelectorAll('.timeline-step');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

timelineSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-50px)';
    step.style.transition = 'all 0.8s ease';
    timelineObserver.observe(step);
});

// Animate feature items on scroll
const featureItems = document.querySelectorAll('.feature-item');
const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    itemObserver.observe(item);
});

// Animate process steps on scroll
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'all 0.6s ease';
    processObserver.observe(step);
});

// Animate tool categories on scroll
const toolCategories = document.querySelectorAll('.tool-category');
const categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

toolCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(40px)';
    category.style.transition = 'all 1s ease';
    categoryObserver.observe(category);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent && heroVisual && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add hover effect to CTA buttons
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth scrolling for anchor links
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

// Add loading animation to buttons on click
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.innerHTML = originalText;
            }, 2000);
        }
    });
});

// Interactive design showcase elements
const contentCards = document.querySelectorAll('.content-card');
contentCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.background = '#d4af37';
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = '#f0f0f0';
        card.style.transform = 'scale(1)';
    });
});

// Mobile frame interaction
const mobileFrame = document.querySelector('.mobile-frame');
if (mobileFrame) {
    mobileFrame.addEventListener('mouseenter', () => {
        mobileFrame.style.transform = 'scale(1.05) translateY(-5px)';
    });
    
    mobileFrame.addEventListener('mouseleave', () => {
        mobileFrame.style.transform = 'scale(1) translateY(0)';
    });
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animation to hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero h1, .hero p, .hero-buttons');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // Add entrance animation to design showcase
    const designShowcase = document.querySelector('.design-showcase');
    if (designShowcase) {
        designShowcase.style.opacity = '0';
        designShowcase.style.transform = 'scale(0.8)';
        designShowcase.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            designShowcase.style.opacity = '1';
            designShowcase.style.transform = 'scale(1)';
        }, 1000);
    }
    
    // Add entrance animation to design process
    const designProcess = document.querySelector('.design-process');
    if (designProcess) {
        designProcess.style.opacity = '0';
        designProcess.style.transform = 'scale(0.9)';
        designProcess.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            designProcess.style.opacity = '1';
            designProcess.style.transform = 'scale(1)';
        }, 800);
    }
});

// Add CSS animation for loading effect
const style = document.createElement('style');
style.textContent = `
    .loading .fas {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .design-element {
        transition: all 0.3s ease;
    }
    
    .content-card {
        transition: all 0.3s ease;
    }
    
    .mobile-frame {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add interactive hover effects to nav items (desktop only)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1024) {
            link.style.transform = 'translateY(-2px)';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1024) {
            link.style.transform = 'translateY(0)';
        }
    });
});

// Add counter animation for timeline steps
const stepNumbers = document.querySelectorAll('.step-number');
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const targetNum = parseInt(number.textContent);
            let currentNum = 0;
            
            const counter = setInterval(() => {
                if (currentNum < targetNum) {
                    currentNum++;
                    number.textContent = currentNum.toString().padStart(2, '0');
                } else {
                    clearInterval(counter);
                }
            }, 100);
        }
    });
}, { threshold: 0.5 });

stepNumbers.forEach(number => {
    numberObserver.observe(number);
});

// Add interactive effects to tool icons
document.querySelectorAll('.tool-icon i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'all 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add pulse effect to floating icons
setInterval(() => {
    document.querySelectorAll('.floating-icon').forEach(icon => {
        icon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
}, 3000);

// MOBILE TOUCH SUPPORT - ADDED FOR BETTER MOBILE EXPERIENCE
if ('ontouchstart' in window) {
    // Add touch support for mobile devices
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Improve mobile menu touch handling
    if (hamburger) {
        hamburger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            hamburger.click();
        }, {passive: false});
    }
    
    // Improve mobile link touch handling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        }, {passive: true});
        
        link.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 150);
        }, {passive: true});
    });
}

// DEBUG: Console log for mobile menu testing
console.log('Mobile navigation initialized');
console.log('Hamburger element:', hamburger);
console.log('Nav menu element:', navMenu);