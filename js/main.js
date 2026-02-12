// Main JS - Click Laser Estética

document.addEventListener("DOMContentLoaded", () => {

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Header Scroll Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Menu
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const menuOverlay = document.querySelector(".mobile-menu-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav-list a");
    const bars = document.querySelectorAll(".bar");

    let isMenuOpen = false;

    menuBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        menuOverlay.classList.toggle("active");

        // Animate hamburger to X (simple css toggling or gsap)
        if (isMenuOpen) {
            gsap.to(bars[0], { rotation: 45, y: 9 });
            gsap.to(bars[1], { opacity: 0 });
            gsap.to(bars[2], { rotation: -45, y: -9 });

            // Stagger animations for links
            gsap.fromTo(mobileLinks,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
            );
        } else {
            gsap.to(bars, { rotation: 0, y: 0, opacity: 1 });
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            isMenuOpen = false;
            menuOverlay.classList.remove("active");
            gsap.to(bars, { rotation: 0, y: 0, opacity: 1 });
        });
    });

    // --- GSAP ANIMATIONS ---

    // Hero Section
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.2
    })
        .from(".hero-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "-=0.5")
        .from(".hero-actions", {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.6")
        .from(".hero-badges", {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.6")
        .from(".scroll-indicator", {
            opacity: 0,
            duration: 1
        }, "-=0.4");


    // Generic Section Title Reveal
    const headings = document.querySelectorAll(".section-title");
    headings.forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // About Section
    gsap.from(".about-photo-frame", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%"
        },
        x: -50,
        opacity: 0,
        duration: 1.2
    });

    gsap.from(".about-photo", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%"
        },
        x: -30,
        opacity: 0,
        duration: 1.2,
        delay: 0.2
    });

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%"
        },
        x: 50,
        opacity: 0,
        duration: 1
    });

    // Tech Cards
    gsap.from(".tech-card", {
        scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Service Cards
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Unit Cards
    gsap.from(".unit-card", {
        scrollTrigger: {
            trigger: ".units-grid",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
    });

    // Counter Animation (Simple version)
    gsap.from(".counter-number", {
        scrollTrigger: {
            trigger: ".units-section",
            start: "top 80%"
        },
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power1.inOut"
    });

});
