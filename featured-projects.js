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
                item.style.display = 'flex'; // Use flex to maintain column layout
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

// Project Modal Data - Updated with real project information
const projectData = {
    'meru-school': {
        title: "Meru International School",
        description: "A comprehensive educational institution website featuring modern design, course information, faculty details, and student resources. Built with responsive design principles to ensure accessibility across all devices.",
        image: "https://www.meruinternationalschool.com/",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        features: [
            "Responsive design for all devices",
            "Course and curriculum information",
            "Faculty and staff profiles",
            "Student admission portal",
            "News and events section",
            "Contact and inquiry forms",
            "Photo gallery and virtual tour",
            "SEO optimized structure"
        ],
        challenges: "Creating an intuitive navigation system for diverse user groups including students, parents, and faculty while maintaining fast loading times.",
        solution: "Implemented a clean, hierarchical navigation structure with optimized images and lazy loading for improved performance.",
        liveUrl: "https://www.meruinternationalschool.com/",
        githubUrl: "#"
    },
    'monarch-ergo': {
        title: "Monarch Ergo",
        description: "Professional ergonomic solutions company website showcasing products, services, and expertise in workplace ergonomics. Features modern design with focus on user experience and product presentation.",
        image: "https://www.monarchergo.com/",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
        features: [
            "Product catalog with detailed specifications",
            "Service portfolio and case studies",
            "Client testimonials and reviews",
            "Contact and consultation booking",
            "Responsive mobile-first design",
            "Interactive product galleries",
            "Company profile and expertise",
            "Blog and resource section"
        ],
        challenges: "Presenting complex ergonomic products in an accessible way while maintaining professional aesthetics and fast loading speeds.",
        solution: "Developed a clean product showcase system with optimized images and intuitive categorization for easy navigation.",
        liveUrl: "https://www.monarchergo.com/",
        githubUrl: "#"
    },
    'pi-cloud': {
        title: "Pi Cloud AI",
        description: "Advanced cloud computing and artificial intelligence services platform. Features cutting-edge design with focus on technology solutions, AI capabilities, and cloud infrastructure services.",
        image: "https://picloud.ai/",
        technologies: ["React", "Node.js", "Express", "MongoDB", "AI APIs", "Cloud Services"],
        features: [
            "AI service integration and APIs",
            "Cloud infrastructure management",
            "Real-time data processing",
            "Scalable architecture design",
            "Security and compliance features",
            "Client dashboard and analytics",
            "API documentation and guides",
            "24/7 monitoring and support"
        ],
        challenges: "Building a scalable platform that can handle high-volume AI processing while maintaining security and performance standards.",
        solution: "Implemented microservices architecture with load balancing and automated scaling to ensure optimal performance.",
        liveUrl: "https://picloud.ai/",
        githubUrl: "#"
    },
    'pi-datacenters': {
        title: "Pi Data Centers",
        description: "Enterprise-grade data center solutions and infrastructure services. Professional website showcasing data center capabilities, security features, and enterprise solutions.",
        image: "https://pidatacenters.com/",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Security APIs"],
        features: [
            "Data center facility showcase",
            "Security and compliance information",
            "Service tier comparisons",
            "Client portal and management",
            "Real-time monitoring dashboards",
            "Disaster recovery solutions",
            "Technical specifications",
            "Support and maintenance services"
        ],
        challenges: "Communicating complex technical infrastructure services to both technical and non-technical audiences while ensuring security.",
        solution: "Created layered information architecture with technical details available on-demand and simplified overviews for general audiences.",
        liveUrl: "https://pidatacenters.com/",
        githubUrl: "#"
    },
    'resonance-hyd': {
        title: "Resonance Hyderabad",
        description: "Educational coaching institute website with comprehensive course management, student portal, and learning resources. Designed for optimal user experience for students and parents.",
        image: "https://resonancehyderabad.com/",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Learning Management System"],
        features: [
            "Course catalog and schedules",
            "Student registration and portal",
            "Online learning resources",
            "Progress tracking and reports",
            "Faculty profiles and expertise",
            "Exam preparation materials",
            "Parent communication portal",
            "Fee payment and management"
        ],
        challenges: "Creating a comprehensive learning management system that serves students, parents, and faculty with different access levels and needs.",
        solution: "Developed role-based access system with personalized dashboards and streamlined communication channels.",
        liveUrl: "https://resonancehyderabad.com/",
        githubUrl: "#"
    },
    'pylonix': {
        title: "Pylonix",
        description: "Technology solutions and software development company website. Modern, professional design showcasing development services, portfolio, and technical expertise.",
        image: "https://www.pylonix.com/",
        technologies: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS"],
        features: [
            "Service portfolio and capabilities",
            "Project showcase and case studies",
            "Team profiles and expertise",
            "Client testimonials and reviews",
            "Technology stack information",
            "Contact and project inquiry",
            "Blog and technical articles",
            "Career opportunities section"
        ],
        challenges: "Presenting complex technical services in an approachable way while demonstrating technical competency and innovation.",
        solution: "Balanced technical depth with clear, accessible explanations and visual demonstrations of capabilities.",
        liveUrl: "https://www.pylonix.com/",
        githubUrl: "#"
    },
    'pickle-jars': {
        title: "Pickle Jars",
        description: "E-commerce platform specializing in traditional Indian pickles and food products. Features online ordering, product catalog, and secure payment processing.",
        image: "https://picklejars.in/",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Payment Gateway", "Shopping Cart"],
        features: [
            "Product catalog with detailed descriptions",
            "Shopping cart and checkout system",
            "Secure payment processing",
            "Order tracking and management",
            "Customer account management",
            "Inventory management system",
            "Shipping and delivery options",
            "Customer reviews and ratings"
        ],
        challenges: "Building a reliable e-commerce platform with secure payment processing and efficient order management for food products.",
        solution: "Implemented robust shopping cart system with integrated payment gateway and automated order processing workflows.",
        liveUrl: "https://picklejars.in/",
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
                <div class="modal-image-container">
                    <iframe src="${project.liveUrl}" class="modal-iframe" title="${project.title}"></iframe>
                </div>
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
                            <i class="fas fa-external-link-alt"></i> Visit Live Site
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
    
    .modal-image-container {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        background: #f5f5f5;
    }
    
    .modal-iframe {
        width: 100%;
        height: 100%;
        border: none;
        transform: scale(0.8);
        transform-origin: top left;
        width: 125%;
        height: 125%;
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
        
        .modal-image-container {
            height: 200px;
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