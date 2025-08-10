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

// FAQ Accordion - FIXED VERSION
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');
            
            // Close all FAQ items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isCurrentlyActive) {
                item.classList.add('active');
            }
        });
    }
});

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Add error message elements to form groups
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        if (input && !group.querySelector('.error-message')) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            group.appendChild(errorMessage);
        }
    });

    // Validate form on submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset all error states
        formGroups.forEach(group => {
            group.classList.remove('error');
        });
        
        // Get form elements
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const projectType = document.getElementById('projectType');
        const message = document.getElementById('message');
        
        // First Name validation
        if (firstName && firstName.value.trim() === '') {
            showError(firstName, 'First name is required');
            isValid = false;
        }
        
        // Last Name validation
        if (lastName && lastName.value.trim() === '') {
            showError(lastName, 'Last name is required');
            isValid = false;
        }
        
        // Email validation
        if (email) {
            if (email.value.trim() === '') {
                showError(email, 'Email address is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Project Type validation
        if (projectType && projectType.value === '') {
            showError(projectType, 'Please select a project type');
            isValid = false;
        }
        
        // Message validation
        if (message) {
            if (message.value.trim() === '') {
                showError(message, 'Please provide project details');
                isValid = false;
            } else if (message.value.trim().length < 20) {
                showError(message, 'Please provide more details (at least 20 characters)');
                isValid = false;
            }
        }
        
        // If form is valid, submit it
        if (isValid) {
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.classList.add('loading');
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.classList.remove('loading');
                    showSuccessModal();
                    contactForm.reset();
                }, 2000);
            }
        }
    });
}

// Helper function to show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    if (formGroup && errorMessage) {
        formGroup.classList.add('error');
        errorMessage.textContent = message;
    }
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Success Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (modal && e.target === modal) {
        closeSuccessModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSuccessModal();
    }
});

// Animate method cards on scroll
const methodCards = document.querySelectorAll('.method-card');
if (methodCards.length > 0) {
    const methodsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    methodCards.forEach(card => {
        methodsObserver.observe(card);
    });
}

// Form input focus effects
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    // Add focus effect
    input.addEventListener('focus', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.color = '#d4af37';
            label.style.transform = 'translateY(-2px)';
            label.style.transition = 'all 0.3s ease';
        }
    });
    
    // Remove focus effect
    input.addEventListener('blur', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.color = '';
            label.style.transform = '';
        }
    });
});

// Add floating animation to message bubbles
document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.message-bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', () => {
            bubble.style.transform = 'scale(1.05)';
            bubble.style.background = '#b8941f';
        });
        
        bubble.addEventListener('mouseleave', () => {
            bubble.style.transform = '';
            bubble.style.background = '';
        });
    });
});

// Add CSS for method card animations
const style = document.createElement('style');
style.textContent = `
    .method-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .method-card.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .method-card:nth-child(1).animate { transition-delay: 0.1s; }
    .method-card:nth-child(2).animate { transition-delay: 0.2s; }
    .method-card:nth-child(3).animate { transition-delay: 0.3s; }
    .method-card:nth-child(4).animate { transition-delay: 0.4s; }
`;
document.head.appendChild(style);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links
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
});