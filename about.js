// DOMContentLoaded wrapper
document.addEventListener('DOMContentLoaded', () => {

    // === Mobile Navigation ===
    (() => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    })();

    // // === Scroll-based Features ===
    // const navbar = document.getElementById('navbar');
    // const backToTopButton = document.getElementById('backToTop');
    // const hero = document.querySelector('.hero');

    // const scrollHandler = () => {
    //     const scrollY = window.scrollY;

    //     // Navbar scroll effect
    //     if (navbar) {
    //         navbar.classList.toggle('scrolled', scrollY > 100);
    //     }

    //     // Back to Top button
    //     if (backToTopButton) {
    //         backToTopButton.classList.toggle('show', scrollY > 300);
    //     }

    //     // Parallax effect
    //     if (hero) {
    //         hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    //     }

    //     // Scroll-in animations
    //     animateOnScroll();
    // };

    // window.addEventListener('scroll', scrollHandler);

    // Back to Top smooth scroll
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // === Skill Bars Animation ===
    (() => {
        const skillsSection = document.querySelector('.skills');

        const animateSkillBars = () => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) bar.style.width = `${width}%`;
            });
        };

        if (skillsSection) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(skillsSection);
        }
    })();

    // === Timeline Animation ===
    (() => {
        const experienceSection = document.querySelector('.experience');

        const animateTimeline = () => {
            document.querySelectorAll('.timeline-item').forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
        };

        // Initialize timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
        });

        if (experienceSection) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateTimeline();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(experienceSection);
        }
    })();

    // === Floating Element Hover Animation ===
    (() => {
        document.querySelectorAll('.element').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.2)';
                element.style.background = '#b8941f';
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
                element.style.background = '#d4af37';
            });
        });
    })();

    // === Service Cards Hover Animation ===
    (() => {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    })();

    // === Scroll-in Animation for Various Elements ===
    const animateOnScroll = () => {
        document.querySelectorAll('.service-card, .skill-category, .about-text, .about-image').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize scroll animation elements
    document.querySelectorAll('.service-card, .skill-category, .about-text, .about-image').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });

    // === Typing Effect ===
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.innerHTML;
            let i = 0;
            heroTitle.innerHTML = '';

            const type = () => {
                if (i < text.length) {
                    if (text.charAt(i) === '<') {
                        const tagEnd = text.indexOf('>', i);
                        heroTitle.innerHTML += text.substring(i, tagEnd + 1);
                        i = tagEnd + 1;
                    } else {
                        heroTitle.innerHTML += text.charAt(i);
                        i++;
                    }
                    setTimeout(type, 150);
                }
            };

            type();
        }
    }, 1000);

    // === Dynamic Particles in Hero Section ===
    (() => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;

        const particleCount = window.innerWidth < 600 ? 20 : 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #d4af37;
                border-radius: 50%;
                opacity: 0.5;
                animation: particleFloat ${Math.random() * 10 + 5}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            particlesContainer.appendChild(particle);
        }

        hero.appendChild(particlesContainer);

        // Particle animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.5;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    })();
});
