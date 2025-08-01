// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

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

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Counter Animation for Hero Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
});

if (heroSection) {
    observer.observe(heroSection);
}

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Project Modal Data
const projectData = {
    project1: {
        title: "E-commerce Platform",
        description: "A comprehensive e-commerce solution built with modern technologies, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Express"],
        features: [
            "User registration and authentication",
            "Product catalog with search and filters",
            "Shopping cart and wishlist functionality",
            "Secure payment processing with Stripe",
            "Order tracking and history",
            "Admin dashboard for inventory management",
            "Responsive design for all devices",
            "Email notifications for orders"
        ],
        challenges: "The main challenge was implementing a secure payment system and ensuring data consistency across multiple user sessions.",
        solution: "Implemented JWT-based authentication and used MongoDB transactions to ensure data integrity during checkout processes.",
        liveUrl: "#",
        githubUrl: "#"
    },
    project2: {
        title: "Analytics Dashboard",
        description: "A real-time data visualization platform that helps businesses track key performance indicators and make data-driven decisions.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Vue.js", "D3.js", "Python", "Flask", "PostgreSQL", "WebSocket"],
        features: [
            "Real-time data visualization",
            "Interactive charts and graphs",
            "Custom dashboard creation",
            "Data export functionality",
            "User role management",
            "API integration capabilities",
            "Mobile-responsive design",
            "Automated report generation"
        ],
        challenges: "Processing large datasets in real-time while maintaining smooth user experience was the primary challenge.",
        solution: "Implemented efficient data aggregation algorithms and used WebSocket connections for real-time updates.",
        liveUrl: "#",
        githubUrl: "#"
    },
    project3: {
        title: "Creative Agency Website",
        description: "A stunning landing page for a creative agency featuring smooth animations, interactive elements, and modern design principles.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Intersection Observer"],
        features: [
            "Smooth scroll animations",
            "Interactive portfolio gallery",
            "Contact form with validation",
            "Mobile-first responsive design",
            "SEO optimized structure",
            "Fast loading performance",
            "Cross-browser compatibility",
            "Accessibility features"
        ],
        challenges: "Creating smooth animations while maintaining good performance across different devices and browsers.",
        solution: "Used GSAP for optimized animations and implemented lazy loading for images to improve performance.",
        liveUrl: "#",
        githubUrl: "#"
    },
    project4: {
        title: "Fitness Tracker App",
        description: "A cross-platform mobile application for tracking fitness activities, setting goals, and monitoring progress over time.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
        features: [
            "Activity tracking (steps, calories, distance)",
            "Goal setting and progress monitoring",
            "Social features and challenges",
            "Workout planning and scheduling",
            "Nutrition tracking",
            "Progress charts and analytics",
            "Push notifications",
            "Offline data synchronization"
        ],
        challenges: "Ensuring accurate activity tracking and smooth performance across iOS and Android platforms.",
        solution: "Integrated device sensors with Firebase for real-time data sync and implemented efficient state management with Redux.",
        liveUrl: "#",
        githubUrl: "#"
    },
    project5: {
        title: "Restaurant Booking System",
        description: "An online reservation platform that allows customers to book tables and helps restaurants manage their reservations efficiently.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Angular", "Express.js", "PostgreSQL", "Socket.io", "Stripe"],
        features: [
            "Real-time table availability",
            "Online reservation system",
            "Customer management",
            "Menu display and ordering",
            "Payment processing",
            "Email confirmations",
            "Admin dashboard",
            "Mobile app integration"
        ],
        challenges: "Managing real-time table availability and preventing double bookings during peak hours.",
        solution: "Implemented database locks and real-time updates using Socket.io to ensure accurate availability status.",
        liveUrl: "#",
        githubUrl: "#"
    },
    project6: {
        title: "Crypto Trading Platform",
        description: "A professional cryptocurrency trading interface with real-time market data, advanced charting, and portfolio management features.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "WebSocket", "Chart.js", "Node.js", "Redis"],
        features: [
            "Real-time price tracking",
            "Advanced trading charts",
            "Portfolio management",
            "Order book visualization",
            "Trading history and analytics",
            "Price alerts and notifications",
            "Multi-currency support",
            "Security features (2FA, encryption)"
        ],
        challenges: "Handling high-frequency real-time data updates without affecting application performance.",
        solution: "Used WebSocket connections with data throttling and Redis caching for optimal performance.",
        liveUrl: "#",
        githubUrl: "#"
    }
};

// Modal Functions
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <div class="modal-project">
                <img src="${project.image}" alt="${project.title}" class="modal-image">
                <div class="modal-info">
                    <h2>${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    
                    <div class="modal-section">
                        <h3>Technologies Used</h3>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Key Features</h3>
                        <ul class="feature-list">
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Challenges & Solutions</h3>
                        <div class="challenge-solution">
                            <p><strong>Challenge:</strong> ${project.challenges}</p>
                            <p><strong>Solution:</strong> ${project.solution}</p>
                        </div>
                    </div>
                    
                    <div class="modal-buttons">
                        <a href="${project.liveUrl}" class="btn btn-primary" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

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

// Add modal styles dynamically
const modalStyles = `
    .modal-project {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
    }
    
    .modal-image {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .modal-info h2 {
        color: #d4af37;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
    
    .project-description {
        color: #666;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    
    .modal-section {
        margin-bottom: 2rem;
    }
    
    .modal-section h3 {
        color: #000;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-tag {
        background: #d4af37;
        color: #000;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .feature-list {
        list-style: none;
        padding: 0;
    }
    
    .feature-list li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 20px;
    }
    
    .feature-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #d4af37;
        font-weight: bold;
    }
    
    .challenge-solution p {
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    @media (max-width: 768px) {
        .modal-project {
            grid-template-columns: 1fr;
        }
        
        .modal-buttons {
            flex-direction: column;
        }
    }
`;

const style = document.createElement('style');
style.textContent = modalStyles;
document.head.appendChild(style);

// Portfolio item hover effects
const portfolioItems2 = document.querySelectorAll('.portfolio-item');
portfolioItems2.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});