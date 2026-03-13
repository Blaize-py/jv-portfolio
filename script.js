// ========================================
// TYPING ANIMATION
// ========================================

const typingTexts = [
  "A Future Virtual Assistant",
  "A Problem Solver",
  "A Digital Builder",
  "Always Learning"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    // Deleting characters
    charIndex--;
  } else {
    // Adding characters
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? deletingSpeed : typingSpeed;

  // If text is completely typed, wait before deleting
  if (!isDeleting && charIndex === currentText.length) {
    speed = delayBetweenTexts;
    isDeleting = true;
  }
  // If text is completely deleted, move to next text
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    speed = typingSpeed;
  }

  setTimeout(typeEffect, speed);
}

// Start typing effect when DOM is ready
document.addEventListener("DOMContentLoaded", typeEffect);

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(".reveal, .reveal-item");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Check if element is in viewport
    if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
      element.classList.add("show");
    }
  });
}

// Run on load and scroll
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// ========================================
// PARTICLE BACKGROUND EFFECT
// ========================================

function createParticles() {
  const particleContainer = document.querySelector(".particle-container");
  const particleCount = window.innerWidth > 768 ? 50 : 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;

    particle.style.left = startX + "px";
    particle.style.top = startY + "px";

    // Random duration and delay
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 2;
    const tx = (Math.random() - 0.5) * 200;

    particle.style.setProperty("--duration", duration + "s");
    particle.style.setProperty("--tx", tx + "px");
    particle.style.animationDelay = delay + "s";

    particleContainer.appendChild(particle);

    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, (duration + delay) * 1000);
  }
}

// Create particles periodically
setInterval(createParticles, 3000);
createParticles(); // Initial creation

// ========================================
// RIPPLE EFFECT ON BUTTONS
// ========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Get position
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    // Create ripple element
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    this.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ========================================
// ACTIVE NAVIGATION INDICATOR
// ========================================

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll(
    "#about, #skills, #projects, #contact"
  );

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// ========================================
// MOBILE MENU INTERACTION (if needed)
// ========================================

// Add active state styling in CSS for nav-link.active
const style = document.createElement("style");
style.textContent = `
  .nav-link.active {
    color: var(--accent-color) !important;
  }
  
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// ========================================
// SKILL CARD STAGGER ANIMATION
// ========================================

window.addEventListener("load", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// ========================================
// RESPONSIVE PARTICLE ADJUSTMENT
// ========================================

window.addEventListener("resize", () => {
  // Particles will adjust automatically through the periodic creation
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Throttle scroll events for better performance
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
  "%c Welcome to JV Portfolio! ",
  "background: linear-gradient(135deg, #06b6d4, #a855f7); color: white; padding: 10px; border-radius: 5px; font-weight: bold;"
);
console.log(
  "Built with modern web technologies for a futuristic user experience."
);