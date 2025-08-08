// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
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

// Full-Stack Diagram Interactions
document.addEventListener('DOMContentLoaded', () => {
    const stackLayers = document.querySelectorAll('.stack-layer');
    
    // Add hover effects to stack layers
    stackLayers.forEach((layer, index) => {
        layer.addEventListener('mouseenter', () => {
            layer.style.transform = 'translateX(15px) scale(1.02)';
            layer.style.background = 'rgba(212, 175, 55, 0.15)';
        });
        
        layer.addEventListener('mouseleave', () => {
            layer.style.transform = 'translateX(0) scale(1)';
            layer.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // Animate stack layers on load
    stackLayers.forEach((layer, index) => {
        layer.style.opacity = '0';
        layer.style.transform = 'translateY(30px)';
        layer.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            layer.style.opacity = '1';
            layer.style.transform = 'translateY(0)';
        }, index * 300 + 1000);
    });
});

// Animate tech cards on scroll
// const techCards = document.querySelectorAll('.tech-card');
// const techObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }, index * 100);
//         }
//     });
// }, { threshold: 0.1 });

// techCards.forEach(card => {
//     card.style.opacity = '0';
//     card.style.transform = 'translateY(30px)';
//     card.style.transition = 'all 0.6s ease';
//     techObserver.observe(card);
// });

// // Animate benefit cards on scroll
// const benefitCards = document.querySelectorAll('.benefit-card');
// const benefitObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }, index * 150);
//         }
//     });
// }, { threshold: 0.1 });

benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease';
    benefitObserver.observe(card);
});

// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 120);
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.7s ease';
    serviceObserver.observe(card);
});

// Animate process steps on scroll
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-50px)';
    step.style.transition = 'all 0.8s ease';
    processObserver.observe(step);
});

// Animate feature items on scroll
const featureItems = document.querySelectorAll('.feature-item');
const featureObserver = new IntersectionObserver((entries) => {
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
    featureObserver.observe(item);
});

// Animate tech categories on scroll
const techCategories = document.querySelectorAll('.tech-category');
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

techCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(40px)';
    category.style.transition = 'all 1s ease';
    categoryObserver.observe(category);
});

// Animate development cycle on scroll
const developmentCycle = document.querySelector('.development-cycle');
const cycleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            
            // Animate cycle items
            const cycleItems = entry.target.querySelectorAll('.cycle-item');
            cycleItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = item.style.transform.replace('scale(0)', 'scale(1)');
                }, index * 200);
            });
        }
    });
}, { threshold: 0.3 });

if (developmentCycle) {
    developmentCycle.style.opacity = '0';
    developmentCycle.style.transform = 'scale(0.8)';
    developmentCycle.style.transition = 'all 1s ease';
    
    // Hide cycle items initially
    const cycleItems = developmentCycle.querySelectorAll('.cycle-item');
    cycleItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = item.style.transform + ' scale(0)';
        item.style.transition = 'all 0.5s ease';
    });
    
    cycleObserver.observe(developmentCycle);
}

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

// Interactive cycle item effects
document.querySelectorAll('.cycle-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = item.style.transform + ' scale(1.1)';
        item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = item.style.transform.replace(' scale(1.1)', '');
        item.style.zIndex = '1';
    });
});

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
    
    // Add entrance animation to fullstack diagram
    const fullstackDiagram = document.querySelector('.fullstack-diagram');
    if (fullstackDiagram) {
        fullstackDiagram.style.opacity = '0';
        fullstackDiagram.style.transform = 'scale(0.8)';
        fullstackDiagram.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            fullstackDiagram.style.opacity = '1';
            fullstackDiagram.style.transform = 'scale(1)';
        }, 1000);
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
    
    .stack-layer {
        transition: all 0.3s ease;
    }
    
    .cycle-item {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add interactive tech icon effects
document.querySelectorAll('.tech-icons i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.color = '#b8941f';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '#d4af37';
    });
});

// Add flow animation control
const flowDots = document.querySelectorAll('.flow-dots .dot');
let flowActive = true;

function toggleFlow() {
    flowActive = !flowActive;
    flowDots.forEach(dot => {
        dot.style.animationPlayState = flowActive ? 'running' : 'paused';
    });
}

// Pause flow on hover over diagram
const fullstackDiagram = document.querySelector('.fullstack-diagram');
if (fullstackDiagram) {
    fullstackDiagram.addEventListener('mouseenter', () => {
        flowDots.forEach(dot => {
            dot.style.animationPlayState = 'paused';
        });
    });
    
    fullstackDiagram.addEventListener('mouseleave', () => {
        flowDots.forEach(dot => {
            dot.style.animationPlayState = 'running';
        });
    });
}

// Add counter animation for process steps
const processNumbers = document.querySelectorAll('.step-number');
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

processNumbers.forEach(number => {
    numberObserver.observe(number);
});