/**
 * Main JavaScript file for the Professional Base Website
 * This file contains all the interactive functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initBackToTop();
  initSmoothScroll();
  initDropdowns();
  initTestimonialSlider();
});

/**
 * Mobile Menu Toggle
 * Handles the mobile menu toggle functionality
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Toggle hamburger menu animation
      this.classList.toggle('active');
      
      // Accessibility
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navList.contains(event.target) && !mobileMenuToggle.contains(event.target) && navList.classList.contains('active')) {
        navList.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Handle dropdown toggle on mobile
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

/**
 * Back to Top Button
 * Shows/hides the back to top button based on scroll position
 */
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Smooth Scroll
 * Enables smooth scrolling for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Dropdown Menus
 * Handles dropdown menu functionality
 */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    // Add keyboard navigation
    dropdown.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.classList.remove('active');
        this.querySelector('.nav-link').focus();
      }
    });
    
    // Add focus handling
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownLinks = dropdownMenu ? dropdownMenu.querySelectorAll('a') : [];
    
    dropdownLinks.forEach(link => {
      link.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextSibling = this.parentNode.nextElementSibling;
          if (nextSibling) {
            nextSibling.querySelector('a').focus();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevSibling = this.parentNode.previousElementSibling;
          if (prevSibling) {
            prevSibling.querySelector('a').focus();
          } else {
            dropdown.querySelector('.nav-link').focus();
          }
        }
      });
    });
  });
}

/**
 * Testimonial Slider
 * Simple testimonial slider functionality
 */
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  if (testimonials.length > 0 && prevButton && nextButton) {
    let currentIndex = 0;
    let testimonialCount = testimonials.length;
    let itemsPerPage = window.innerWidth > 768 ? 2 : 1;
    let pageCount = Math.ceil(testimonialCount / itemsPerPage);
    
    // Function to update visible testimonials
    function updateTestimonials() {
      testimonials.forEach((testimonial, index) => {
        const startIndex = currentIndex * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        if (index >= startIndex && index < endIndex) {
          testimonial.style.display = 'block';
        } else {
          testimonial.style.display = 'none';
        }
      });
    }
    
    // Initialize
    updateTestimonials();
    
    // Previous button click
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + pageCount) % pageCount;
      updateTestimonials();
    });
    
    // Next button click
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % pageCount;
      updateTestimonials();
    });
    
    // Update on window resize
    window.addEventListener('resize', function() {
      itemsPerPage = window.innerWidth > 768 ? 2 : 1;
      pageCount = Math.ceil(testimonialCount / itemsPerPage);
      currentIndex = Math.min(currentIndex, pageCount - 1);
      updateTestimonials();
    });
  }
}

/**
 * Form Validation
 * Generic form validation function
 */
function validateForm(formId) {
  const form = document.getElementById(formId);
  
  if (form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          
          // Add error message if it doesn't exist
          let errorMessage = field.nextElementSibling;
          if (!errorMessage || !errorMessage.classList.contains('error-message')) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'This field is required';
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
          }
        } else {
          field.classList.remove('error');
          
          // Remove error message if it exists
          const errorMessage = field.nextElementSibling;
          if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
    
    // Clear error on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('error');
        
        // Remove error message if it exists
        const errorMessage = this.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
          errorMessage.remove();
        }
      });
    });
  }
}

/**
 * Lazy Loading Images
 * Lazy loads images for better performance
 */
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

/**
 * Theme Switcher
 * Function to switch between different themes
 */
function switchTheme(themeName) {
  document.body.className = '';
  document.body.classList.add(`theme-${themeName}`);
  
  // Save theme preference to localStorage
  localStorage.setItem('theme', themeName);
}

/**
 * Load Saved Theme
 * Loads the user's saved theme preference
 */
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    switchTheme(savedTheme);
  }
}

// Load saved theme on page load
loadSavedTheme();
