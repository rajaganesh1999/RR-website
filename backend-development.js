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

// Server Animation Effects
document.addEventListener('DOMContentLoaded', () => {
    const serverUnits = document.querySelectorAll('.server-unit');
    
    // Cycle through server units to show activity
    let currentActive = 0;
    setInterval(() => {
        serverUnits.forEach(unit => unit.classList.remove('active'));
        serverUnits[currentActive].classList.add('active');
        currentActive = (currentActive + 1) % serverUnits.length;
    }, 2000);
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

// Animate tech cards on scroll
const techCards = document.querySelectorAll('.tech-card');
const techObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

techCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    techObserver.observe(card);
});

// Animate benefit cards on scroll
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

// benefitCards.forEach(card => {
//     card.style.opacity = '0';
//     card.style.transform = 'translateY(30px)';
//     card.style.transition = 'all 0.8s ease';
//     benefitObserver.observe(card);
// });

// // Animate architecture cards on scroll
// const archCards = document.querySelectorAll('.arch-card');
// const archObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }, index * 120);
//         }
//     });
// }, { threshold: 0.1 });

archCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.7s ease';
    archObserver.observe(card);
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

// Animate architecture diagram layers
const layers = document.querySelectorAll('.layer');
const layerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

layers.forEach(layer => {
    layer.style.opacity = '0';
    layer.style.transform = 'translateY(20px)';
    layer.style.transition = 'all 0.6s ease';
    layerObserver.observe(layer);
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
    
    // Add entrance animation to server animation
    const serverAnimation = document.querySelector('.server-animation');
    if (serverAnimation) {
        serverAnimation.style.opacity = '0';
        serverAnimation.style.transform = 'scale(0.8)';
        serverAnimation.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            serverAnimation.style.opacity = '1';
            serverAnimation.style.transform = 'scale(1)';
        }, 1000);
    }
    
    // Add entrance animation to architecture diagram
    const archDiagram = document.querySelector('.architecture-diagram');
    if (archDiagram) {
        archDiagram.style.opacity = '0';
        archDiagram.style.transform = 'scale(0.9)';
        archDiagram.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            archDiagram.style.opacity = '1';
            archDiagram.style.transform = 'scale(1)';
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
    
    .server-unit {
        transition: all 0.3s ease;
    }
    
    .server-unit:hover .server-lights .light {
        animation-duration: 0.5s;
    }
`;
document.head.appendChild(style);

// Add interactive server unit effects
document.querySelectorAll('.server-unit').forEach(unit => {
    unit.addEventListener('mouseenter', () => {
        unit.style.transform = 'translateX(5px)';
        unit.style.borderLeftWidth = '4px';
    });
    
    unit.addEventListener('mouseleave', () => {
        unit.style.transform = 'translateX(0)';
        unit.style.borderLeftWidth = '3px';
    });
});

// Add data flow animation control
let dataFlowActive = true;
const dataPackets = document.querySelectorAll('.data-packet');

function toggleDataFlow() {
    dataFlowActive = !dataFlowActive;
    dataPackets.forEach(packet => {
        packet.style.animationPlayState = dataFlowActive ? 'running' : 'paused';
    });
}

// Pause data flow on hover over server rack
const serverRack = document.querySelector('.server-rack');
if (serverRack) {
    serverRack.addEventListener('mouseenter', () => {
        dataPackets.forEach(packet => {
            packet.style.animationPlayState = 'paused';
        });
    });
    
    serverRack.addEventListener('mouseleave', () => {
        dataPackets.forEach(packet => {
            packet.style.animationPlayState = 'running';
        });
    });
}