// Mobile menu toggle
function initializeMobileMenu() {
    const menuButton = document.querySelector('button');
    const mobileMenu = document.querySelector('.md\\:hidden.hidden');
    const menuLinks = document.querySelectorAll('.md\\:hidden a');

    // Toggle menu on button click
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Initialize animations for different elements
function initializeAnimations() {
    // Observe elements with fade-in class (skills, projects, social cards)
    document.querySelectorAll('.fade-in, .skill-card, .project-card, .social-card').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Form submission handler with validation
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = 'fixed top-24 right-4 p-4 rounded-lg shadow-lg transition-all duration-500 transform translate-x-[150%] z-50';
        document.body.appendChild(messageDiv);

        // Show message function
        function showMessage(message, isError = false) {
            messageDiv.innerHTML = message;
            messageDiv.className = `fixed top-24 right-4 p-4 rounded-lg shadow-lg transition-all duration-500 transform z-50 ${
                isError 
                ? 'bg-red-950/95 text-red-200 border border-red-500' 
                : 'bg-green-950/95 text-green-200 border border-green-500'
            }`;
            
            // Show message
            requestAnimationFrame(() => {
                messageDiv.style.transform = 'translateX(0)';
            });

            // Hide message after 3 seconds
            setTimeout(() => {
                messageDiv.style.transform = 'translateX(150%)';
            }, 3000);
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            const errors = [];
            
            if (!name) {
                errors.push('Name is required');
            }
            
            if (!email) {
                errors.push('Email is required');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.push('Please enter a valid email address');
            }
            
            if (!message) {
                errors.push('Message is required');
            } else if (message.length < 10) {
                errors.push('Message must be at least 10 characters long');
            }
            
            // Handle validation result
            if (errors.length > 0) {
                const errorHTML = `
                    <div class="font-medium mb-2">Please fix the following errors:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        ${errors.map(error => `<li>${error}</li>`).join('')}
                    </ul>
                `;
                showMessage(errorHTML, true);
            } else {
                // Form is valid
                showMessage('Thank you for your message! I will get back to you soon.');
                this.reset();
            }
        });
    }
}

// Active section highlighting
function initializeActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-amber-500');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-amber-500');
            }
        });
    }

    window.addEventListener('scroll', setActiveSection);
    setActiveSection(); // Set initial active section
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeContactForm();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeActiveSection();
}); 