// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorInner = document.querySelector('.cursor-inner');
        this.cursorOuter = document.querySelector('.cursor-outer');
        this.hoverElements = document.querySelectorAll('.hover-effect, .nav-link, .social-link, .footer-link');
        
        this.init();
    }
    
    init() {
        // Hide cursor on mobile
        if (window.innerWidth <= 768) {
            this.cursor.style.display = 'none';
            document.body.style.cursor = 'auto';
            return;
        }
        
        this.bindEvents();
        this.addHoverEffects();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursorInner, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            
            gsap.to(this.cursorOuter, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        document.addEventListener('mousedown', () => {
            gsap.to(this.cursorInner, { scale: 1.5, duration: 0.1 });
            gsap.to(this.cursorOuter, { scale: 0.8, duration: 0.1 });
        });
        
        document.addEventListener('mouseup', () => {
            gsap.to(this.cursorInner, { scale: 1, duration: 0.1 });
            gsap.to(this.cursorOuter, { scale: 1, duration: 0.1 });
        });
    }
    
    addHoverEffects() {
        this.hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursorOuter.classList.add('hover');
                gsap.to(this.cursorInner, { scale: 0.5, duration: 0.2 });
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursorOuter.classList.remove('hover');
                gsap.to(this.cursorInner, { scale: 1, duration: 0.2 });
            });
        });
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Navigation smooth scroll
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: {
                            y: targetSection,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                }
            });
        });
        
        // Scroll indicator click
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: '#about',
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        });
    }
}

// Hero Animations
class HeroAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Title animation
        const titleLines = document.querySelectorAll('.title-line');
        
        gsap.set(titleLines, { y: 100, opacity: 0 });
        
        gsap.to(titleLines, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5
        });
        
        // Subtitle animation
        gsap.fromTo('.hero-subtitle', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' }
        );
        
        // Buttons animation
        gsap.fromTo('.hero-buttons .btn', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 2, ease: 'power2.out' }
        );
        
        // Code block animation
        gsap.fromTo('.code-block', 
            { x: 100, opacity: 0, rotationY: 45 },
            { x: 0, opacity: 1, rotationY: 0, duration: 1.5, delay: 1, ease: 'power2.out' }
        );
        
        // Code typing effect
        this.typeCode();
        
        // Floating shapes animation
        this.animateShapes();
        
        // Scroll indicator animation
        gsap.fromTo('.scroll-indicator', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power2.out' }
        );
    }
    
    typeCode() {
        const codeLines = document.querySelectorAll('.code-line');
        
        codeLines.forEach((line, index) => {
            const originalText = line.textContent;
            line.textContent = '';
            
            gsap.to(line, {
                duration: originalText.length * 0.05,
                text: originalText,
                delay: 2.5 + (index * 0.3),
                ease: 'none'
            });
        });
    }
    
    animateShapes() {
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            gsap.set(shape, { scale: 0, rotation: 0 });
            
            gsap.to(shape, {
                scale: 1,
                rotation: 360,
                duration: 2,
                delay: index * 0.5,
                ease: 'back.out(1.7)'
            });
            
            // Continuous floating animation
            gsap.to(shape, {
                y: '+=20',
                rotation: '+=180',
                duration: 4 + index,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Navbar background on scroll
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: { className: 'scrolled', targets: '.navbar' }
        });
        
        // Section animations
        this.animateAboutSection();
        this.animateSkillsSection();
        this.animateExperienceSection();
        this.animateProjectsSection();
        this.animateServicesSection();
        this.animateContactSection();
        
        // Counter animations
        this.animateCounters();
        
        // Parallax effects
        this.addParallaxEffects();
    }
    
    animateAboutSection() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        tl.fromTo('.about-content .text-block', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
        )
        .fromTo('.profile-card', 
            { x: 100, opacity: 0, rotationY: 45 },
            { x: 0, opacity: 1, rotationY: 0, duration: 1, ease: 'power2.out' },
            '-=0.5'
        );
    }
    
    animateSkillsSection() {
        ScrollTrigger.create({
            trigger: '#skills',
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo('.skill-category', 
                    { y: 50, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }
                );
                
                // Animate skill bars
                setTimeout(() => {
                    this.animateSkillBars();
                }, 500);
            }
        });
    }
    
    animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            const level = item.getAttribute('data-level');
            const progressBar = item.querySelector('.skill-progress');
            
            gsap.to(progressBar, {
                width: level + '%',
                duration: 1.5,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });
    }
    
    animateExperienceSection() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            gsap.fromTo(item, 
                { 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }
    
    animateProjectsSection() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            gsap.fromTo(card, 
                { y: 100, opacity: 0, rotationX: 45 },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            // Hover animations
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    animateServicesSection() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        gsap.fromTo(serviceCards, 
            { y: 100, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Service icon animations
        const iconShapes = document.querySelectorAll('.icon-shape');
        iconShapes.forEach(shape => {
            ScrollTrigger.create({
                trigger: shape,
                start: 'top 90%',
                onEnter: () => {
                    gsap.to(shape, {
                        rotation: 360,
                        duration: 2,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    animateContactSection() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        
        tl.fromTo('.contact-info', 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        )
        .fromTo('.contact-form', 
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.7'
        );
        
        // Form input animations
        this.animateFormInputs();
    }
    
    animateFormInputs() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach((group, index) => {
            gsap.fromTo(group, 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: group,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }
    
    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => {
                    gsap.fromTo(counter, 
                        { textContent: 0 },
                        {
                            textContent: target,
                            duration: 2,
                            ease: 'power2.out',
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                counter.textContent = Math.ceil(this.targets()[0].textContent);
                            }
                        }
                    );
                }
            });
        });
    }
    
    addParallaxEffects() {
        // Background shapes parallax
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            gsap.to(shape, {
                yPercent: -50 * (index + 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: shape,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
        
        // Section numbers parallax
        const sectionNumbers = document.querySelectorAll('.section-number');
        sectionNumbers.forEach(number => {
            gsap.to(number, {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: number,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.isMenuOpen = false;
        
        this.init();
    }
    
    init() {
        if (window.innerWidth <= 768) {
            this.setupMobileMenu();
        }
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.setupMobileMenu();
            } else {
                this.resetMenu();
            }
        });
    }
    
    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }
    
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        
        if (this.isMenuOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }
    
    openMenu() {
        gsap.set(this.navMenu, { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(10, 10, 10, 0.95)', padding: '2rem', backdropFilter: 'blur(20px)' });
        
        gsap.fromTo(this.navMenu, 
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
        
        gsap.fromTo(this.navLinks, 
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out' }
        );
        
        // Hamburger animation
        const spans = this.hamburger.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });
    }
    
    closeMenu() {
        this.isMenuOpen = false;
        
        gsap.to(this.navMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
                gsap.set(this.navMenu, { display: 'none' });
            }
        });
        
        // Reset hamburger
        const spans = this.hamburger.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
    
    resetMenu() {
        gsap.set(this.navMenu, { clearProps: 'all' });
        this.isMenuOpen = false;
    }
}

// Interactive Effects
class InteractiveEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.addButtonEffects();
        this.addCardHoverEffects();
        this.addTextHoverEffects();
        this.addFormEffects();
    }
    
    addButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Ripple effect
                this.createRipple(e);
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('click', (e) => {
                this.createRipple(e);
            });
        });
    }
    
    createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            transform: scale(0);
        `;
        
        button.appendChild(ripple);
        
        gsap.to(ripple, {
            scale: 2,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                ripple.remove();
            }
        });
    }
    
    addCardHoverEffects() {
        const cards = document.querySelectorAll('.service-card, .timeline-content, .profile-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: '0 0 0 rgba(255, 107, 107, 0)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    addTextHoverEffects() {
        const links = document.querySelectorAll('.nav-link, .social-link, .footer-link');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    color: '#ff6b6b',
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    color: '#ffffff',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    addFormEffects() {
        const formInputs = document.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
        
        // Form submission animation
        const form = document.querySelector('.contact-form');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Add your form submission logic here
                    this.showSuccessMessage();
                }
            });
        });
    }
    
    showSuccessMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(78, 205, 196, 0.9);
            color: white;
            padding: 2rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            z-index: 10000;
            font-weight: 600;
        `;
        message.textContent = 'Message sent successfully!';
        
        document.body.appendChild(message);
        
        gsap.fromTo(message, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
        
        setTimeout(() => {
            gsap.to(message, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    message.remove();
                }
            });
        }, 3000);
    }
}

// Advanced Animations for New Sections
class AdvancedAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.animateTestimonials();
        this.animateProcess();
        this.animateAwards();
        this.animateBlog();
        this.animateGallery();
    }
    
    animateTestimonials() {
        // Floating quotes background animation
        const floatingQuotes = document.querySelectorAll('.quote-bg');
        floatingQuotes.forEach((quote, index) => {
            gsap.set(quote, { rotation: Math.random() * 360 });
            
            gsap.to(quote, {
                rotation: '+=360',
                duration: 20 + index * 5,
                repeat: -1,
                ease: 'none'
            });
            
            gsap.to(quote, {
                y: '+=50',
                duration: 8 + index * 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
        
        // Testimonial cards animation
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        testimonialCards.forEach((card, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            tl.fromTo(card, 
                { 
                    opacity: 0, 
                    y: 100,
                    rotationY: 45,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: 1,
                    delay: index * 0.2,
                    ease: 'back.out(1.7)'
                }
            );
            
            // Quote icon animation
            const quoteIcon = card.querySelector('.quote-icon');
            tl.fromTo(quoteIcon,
                { scale: 0, rotation: -180 },
                { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' },
                '-=0.5'
            );
            
            // Text typing effect
            const testimonialText = card.querySelector('.testimonial-text');
            const originalText = testimonialText.textContent;
            testimonialText.textContent = '';
            
            tl.to(testimonialText, {
                duration: originalText.length * 0.02,
                text: originalText,
                ease: 'none'
            }, '-=0.3');
        });
    }
    
    animateProcess() {
        const processSteps = document.querySelectorAll('.process-step');
        const progressLine = document.querySelector('.progress-line');
        
        // Progress line animation
        ScrollTrigger.create({
            trigger: '#process',
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: () => {
                gsap.to(progressLine, {
                    width: '100%',
                    duration: 2,
                    ease: 'power2.out'
                });
            }
        });
        
        // Process steps animation
        processSteps.forEach((step, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            const stepNumber = step.querySelector('.step-number');
            const stepIcon = step.querySelector('.step-icon > div');
            const stepContent = step.querySelector('.step-content');
            
            // Step number with counter effect
            tl.fromTo(stepNumber,
                { scale: 0, rotation: 180, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
            );
            
            // Icon with morphing effect
            tl.fromTo(stepIcon,
                { scale: 0, rotation: -360, borderRadius: '50%' },
                { scale: 1, rotation: 0, borderRadius: '20px', duration: 1, ease: 'elastic.out(1, 0.3)' },
                '-=0.5'
            );
            
            // Content with stagger effect
            const contentElements = stepContent.querySelectorAll('h3, p');
            tl.fromTo(contentElements,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
                '-=0.3'
            );
            
            // Hover interactions
            step.addEventListener('mouseenter', () => {
                gsap.to(stepIcon, {
                    scale: 1.1,
                    rotation: '+=10',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(stepNumber, {
                    color: '#ff6b6b',
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            step.addEventListener('mouseleave', () => {
                gsap.to(stepIcon, {
                    scale: 1,
                    rotation: '-=10',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(stepNumber, {
                    color: 'rgba(255, 107, 107, 0.2)',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    animateAwards() {
        const awardItems = document.querySelectorAll('.award-item');
        const statCircles = document.querySelectorAll('.stat-circle');
        
        // Award items animation
        gsap.fromTo(awardItems,
            { 
                opacity: 0, 
                y: 100,
                rotationX: 90,
                scale: 0.5
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '#awards',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Award icons floating animation
        awardItems.forEach(item => {
            const icon = item.querySelector('.award-icon > div');
            gsap.to(icon, {
                y: '+=10',
                rotation: '+=5',
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
        
        // Circular progress animation
        statCircles.forEach((circle, index) => {
            const percent = circle.getAttribute('data-percent');
            const circleElement = circle.querySelector('.circle');
            const percentageElement = circle.querySelector('.percentage');
            
            ScrollTrigger.create({
                trigger: circle,
                start: 'top 85%',
                onEnter: () => {
                    gsap.fromTo(circleElement,
                        { strokeDashoffset: 100 },
                        { 
                            strokeDashoffset: 100 - percent,
                            duration: 2,
                            delay: index * 0.3,
                            ease: 'power2.out'
                        }
                    );
                    
                    gsap.fromTo(percentageElement,
                        { textContent: 0 },
                        {
                            textContent: percent,
                            duration: 2,
                            delay: index * 0.3,
                            ease: 'power2.out',
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                percentageElement.textContent = Math.ceil(this.targets()[0].textContent) + '%';
                            }
                        }
                    );
                }
            });
        });
    }
    
    animateBlog() {
        const blogCards = document.querySelectorAll('.blog-card');
        
        blogCards.forEach((card, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            const isFeature = card.classList.contains('featured');
            
            tl.fromTo(card,
                { 
                    opacity: 0,
                    y: isFeature ? 150 : 100,
                    rotationY: isFeature ? 30 : 15,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: isFeature ? 1.2 : 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out'
                }
            );
            
            // Parallax effect on scroll
            gsap.to(card, {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
            
            // Advanced hover effects
            card.addEventListener('mouseenter', () => {
                const image = card.querySelector('.blog-image');
                const category = card.querySelector('.blog-category');
                
                gsap.to(image, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
                
                gsap.to(category, {
                    scale: 1.1,
                    backgroundColor: '#ff6b6b',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                const image = card.querySelector('.blog-image');
                const category = card.querySelector('.blog-category');
                
                gsap.to(image, {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
                
                gsap.to(category, {
                    scale: 1,
                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    animateGallery() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Initial gallery animation
        gsap.fromTo(galleryItems,
            { 
                opacity: 0,
                scale: 0.8,
                rotationY: 45
            },
            {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '#gallery',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Filter functionality with animations
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter animation
                galleryItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    const shouldShow = filter === 'all' || category === filter;
                    
                    if (shouldShow) {
                        gsap.to(item, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            delay: index * 0.05,
                            ease: 'back.out(1.7)'
                        });
                    } else {
                        gsap.to(item, {
                            opacity: 0.3,
                            scale: 0.8,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        });
        
        // Advanced gallery item effects
        galleryItems.forEach(item => {
            const image = item.querySelector('.gallery-image');
            const overlay = item.querySelector('.gallery-overlay');
            
            // Magnetic effect
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(item, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to(image, {
                    x: x * 0.05,
                    y: y * 0.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
                
                gsap.to(image, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
            
            // Click animation
            item.addEventListener('click', () => {
                gsap.to(item, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            });
        });
    }
}

// Page Loader
class PageLoader {
    constructor() {
        this.init();
    }
    
    init() {
        // Create loader
        const loader = document.createElement('div');
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #0a0a0a;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        `;
        
        const loaderText = document.createElement('div');
        loaderText.style.cssText = `
            font-size: 2rem;
            font-weight: 700;
            color: #ff6b6b;
            margin-bottom: 2rem;
            font-family: 'JetBrains Mono', monospace;
        `;
        loaderText.textContent = 'ASIM.DEV';
        
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            width: 200px;
            height: 4px;
            background: rgba(255, 107, 107, 0.2);
            border-radius: 2px;
            overflow: hidden;
        `;
        
        const progress = document.createElement('div');
        progress.style.cssText = `
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            border-radius: 2px;
        `;
        
        progressBar.appendChild(progress);
        loader.appendChild(loaderText);
        loader.appendChild(progressBar);
        document.body.appendChild(loader);
        
        // Animate loader
        gsap.to(progress, {
            width: '100%',
            duration: 2,
            ease: 'power2.out',
            onComplete: () => {
                this.createRevealAnimation(loader);
            }
        });
        
        // Pulsing animation for loader text
        gsap.to(loaderText, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    createRevealAnimation(loader) {
        // Create curtain elements
        const curtainLeft = document.createElement('div');
        const curtainRight = document.createElement('div');
        
        // Style the curtains
        const curtainStyle = `
            position: fixed;
            top: 0;
            width: 50vw;
            height: 100vh;
            background: #0a0a0a;
            z-index: 10001;
        `;
        
        curtainLeft.style.cssText = curtainStyle + 'left: 0;';
        curtainRight.style.cssText = curtainStyle + 'right: 0;';
        
        // Hide curtains initially
        gsap.set([curtainLeft, curtainRight], { opacity: 0 });
        
        document.body.appendChild(curtainLeft);
        document.body.appendChild(curtainRight);
        
        // Animation timeline
        const tl = gsap.timeline({
            onComplete: () => {
                curtainLeft.remove();
                curtainRight.remove();
                this.startAnimations();
                this.revealContent();
            }
        });
        
        // Progress bar completion
        tl.to('.progress', {
            width: '100%',
            duration: 0.5,
            ease: 'power2.out'
        })
        
        // Fade out loader content
        .to(['.loader-text', '.progress-container'], {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.1
        }, '+=0.3')
        
        // Show curtains (black screen)
        .to([curtainLeft, curtainRight], {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
        
        // Remove loader background
        .to(loader, {
            opacity: 0,
            duration: 0.2
        })
        
        // Split curtains to reveal site
        .to(curtainLeft, {
            x: '-100%',
            duration: 1.2,
            ease: 'power3.inOut'
        }, '+=0.5')
        
        .to(curtainRight, {
            x: '100%',
            duration: 1.2,
            ease: 'power3.inOut'
        }, '-=1.2')
        
        // Remove loader
        .call(() => {
            loader.remove();
        }, null, '-=1.2');
    }
    
    revealContent() {
        // Animate main content elements in sequence
        const hero = document.querySelector('.hero');
        const nav = document.querySelector('.nav');
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero .subtitle');
        const heroButtons = document.querySelector('.hero .hero-buttons');
        const glassBox = document.querySelector('.hero .glass-box');
        
        // Set initial states
        gsap.set([nav, heroTitle, heroSubtitle, heroButtons, glassBox], {
            opacity: 0,
            y: 50
        });
        
        // Reveal sequence
        const revealTl = gsap.timeline();
        
        revealTl.to(nav, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to(heroTitle, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.4')
        .to(heroSubtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .to([heroButtons, glassBox], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            stagger: 0.2
        }, '-=0.4');
    }
    

    
    startAnimations() {
        // Initialize all animation classes
        new CustomCursor();
        new SmoothScroll();
        new HeroAnimations();
        new ScrollAnimations();
        new MobileNavigation();
        new InteractiveEffects();
        new AdvancedAnimations();
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Optimize GSAP for better performance
        gsap.config({
            force3D: true,
            nullTargetWarn: false
        });
        
        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.globalTimeline.timeScale(0.5);
        }
        
        // Throttle scroll events
        this.throttleScrollEvents();
    }
    
    throttleScrollEvents() {
        let ticking = false;
        
        function updateScrollEffects() {
            // Update scroll-dependent animations here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PerformanceMonitor();
    new PageLoader();
});

// Handle window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Smooth scroll to top on refresh
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
}); 