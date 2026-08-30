/* ==========================================================================
   LUMORA INTERIORS — VANILLA JAVASCRIPT INTERACTIONS
   Interactive Editorial Architectural Experience
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. PROJECT DATA STORE (FOR DYNAMIC MODAL & FILTERING)
     ------------------------------------------------------------------------ */
  const projectsData = [
    {
      id: 1,
      title: "THE MONOCHROME HOUSE",
      category: "RESIDENTIAL",
      location: "Gurgaon, India",
      year: "2026",
      area: "6,500 sq ft",
      mainImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      desc: "A brutalist-inspired residential sanctuary balancing raw concrete surfaces with warm natural oak and bronze accents. Designed around a central light courtyard, the spatial sequence seamlessly merges indoor tranquility with shaded garden vistas.",
      gallery: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
      ]
    },
    {
      id: 2,
      title: "SANDSTONE RESIDENCE",
      category: "RESIDENTIAL",
      location: "Jaipur, India",
      year: "2025",
      area: "8,200 sq ft",
      mainImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      desc: "Honoring local Rajasthani stonemasonry, Sandstone Residence fuses monolithic hand-carved stone walls with clean modern minimalism. High ceilings and strategically placed apertures capture soft, indirect sunlight throughout the day.",
      gallery: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
      ]
    },
    {
      id: 3,
      title: "THE QUIET LOFT",
      category: "RESIDENTIAL",
      location: "Mumbai, India",
      year: "2025",
      area: "3,800 sq ft",
      mainImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
      desc: "An urban loft designed as a calm retreat from the energetic bustle of South Mumbai. Features custom tactile plaster walls, fluted glass partitions, integrated concealed storage, and tailored low-profile modular seating.",
      gallery: [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85"
      ]
    },
    {
      id: 4,
      title: "CASA VERDE",
      category: "HOSPITALITY",
      location: "Goa, India",
      year: "2026",
      area: "12,000 sq ft",
      mainImg: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
      desc: "A luxury boutique eco-resort nestled amidst lush tropical foliage. Employs open-air pavilions, reclaimed teakwood, native laterite stone, and custom woven linen lamps to curate an immersive biophilic experience.",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=85"
      ]
    },
    {
      id: 5,
      title: "NOIR PENTHOUSE",
      category: "COMMERCIAL",
      location: "New Delhi, India",
      year: "2026",
      area: "5,400 sq ft",
      mainImg: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",
      desc: "A dramatic corporate headquarters executive suite and penthouse gallery. Featuring Nero Marquina marble floors, smoked glass walls, matte black steel work, and warm architectural spot lighting.",
      gallery: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=85"
      ]
    },
    {
      id: 6,
      title: "THE SERENE HOTEL",
      category: "HOSPITALITY",
      location: "Udaipur, India",
      year: "2025",
      area: "15,500 sq ft",
      mainImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
      desc: "Reimagining heritage lakefront luxury through modern architectural restraint. White polished lime plaster, reflective water features, and handcrafted bespoke brass lighting fixtures define the serene guest journey.",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85"
      ]
    }
  ];

  /* ------------------------------------------------------------------------
     2. PRELOADER DISMISSAL
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 900);
    });
    // Fallback if load already fired
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1800);
  }

  /* ------------------------------------------------------------------------
     3. STICKY NAVBAR TRANSFORMATION
     ------------------------------------------------------------------------ */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ------------------------------------------------------------------------
     4. MOBILE HAMBURGER MENU & DRAWER
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      document.body.classList.toggle('modal-open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     6. STATS COUNTER ANIMATION
     ------------------------------------------------------------------------ */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const suffix = stat.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / target));

          const timer = setInterval(() => {
            count += 1;
            stat.textContent = (count < 10 && target >= 10 ? '0' + count : count) + suffix;
            if (count >= target) {
              stat.textContent = (target < 10 ? '0' + target : target) + suffix;
              clearInterval(timer);
            }
          }, Math.max(stepTime, 30));
        });
      }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  /* ------------------------------------------------------------------------
     7. PROJECT FILTERING LOGIC
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'ALL' || category === filterValue) {
          card.style.opacity = '0';
          card.classList.remove('hide');
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.classList.add('hide');
          }, 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     8. FULL-SCREEN PROJECT MODAL SYSTEM
     ------------------------------------------------------------------------ */
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalHeroImg = document.getElementById('modal-hero-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalLocation = document.getElementById('modal-location');
  const modalYear = document.getElementById('modal-year');
  const modalArea = document.getElementById('modal-area');
  const modalDesc = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');
  const prevProjectBtn = document.getElementById('modal-prev-btn');
  const nextProjectBtn = document.getElementById('modal-next-btn');

  let currentProjectIndex = 0;

  function openProjectModal(id) {
    const index = projectsData.findIndex(p => p.id === parseInt(id));
    if (index === -1) return;

    currentProjectIndex = index;
    renderModalContent(projectsData[currentProjectIndex]);
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function renderModalContent(project) {
    modalHeroImg.src = project.mainImg;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalLocation.textContent = project.location;
    modalYear.textContent = project.year;
    modalArea.textContent = project.area;
    modalDesc.textContent = project.desc;

    // Render gallery
    modalGallery.innerHTML = '';
    project.gallery.forEach(imgUrl => {
      const imgEl = document.createElement('img');
      imgEl.src = imgUrl;
      imgEl.alt = project.title;
      modalGallery.appendChild(imgEl);
    });
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (prevProjectBtn) {
    prevProjectBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
      renderModalContent(projectsData[currentProjectIndex]);
    });
  }

  if (nextProjectBtn) {
    nextProjectBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
      renderModalContent(projectsData[currentProjectIndex]);
    });
  }

  // Close modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ------------------------------------------------------------------------
     9. FURNITURE COLLECTION HORIZONTAL SCROLL CONTROLS
     ------------------------------------------------------------------------ */
  const collectionTrack = document.querySelector('.collection-track');
  const prevArrow = document.getElementById('collection-prev');
  const nextArrow = document.getElementById('collection-next');

  if (collectionTrack && prevArrow && nextArrow) {
    prevArrow.addEventListener('click', () => {
      collectionTrack.scrollBy({ left: -380, behavior: 'smooth' });
    });
    nextArrow.addEventListener('click', () => {
      collectionTrack.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     10. TESTIMONIAL SLIDER LOGIC
     ------------------------------------------------------------------------ */
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function startSlideTimer() {
    slideInterval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 5500);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      const index = parseInt(dot.getAttribute('data-index'));
      showSlide(index);
      startSlideTimer();
    });
  });

  if (slides.length > 0) {
    startSlideTimer();
  }

  /* ------------------------------------------------------------------------
     11. CUSTOM DESKTOP CURSOR WITH HOVER DETECTOR
     ------------------------------------------------------------------------ */
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover state for interactive images & buttons
    const hoverTargets = document.querySelectorAll('.project-card, .material-card, .btn-primary, .btn-secondary, .nav-cta');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        follower.classList.add('cursor-hover');
        if (target.classList.contains('project-card') || target.classList.contains('material-card')) {
          cursor.textContent = 'VIEW';
        }
      });

      target.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        follower.classList.remove('cursor-hover');
        cursor.textContent = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     12. MAGNETIC BUTTON HOVER EFFECT
     ------------------------------------------------------------------------ */
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });

  /* ------------------------------------------------------------------------
     13. JOURNAL READER OVERLAY
     ------------------------------------------------------------------------ */
  const journalCards = document.querySelectorAll('.journal-card');
  journalCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.journal-title').textContent;
      alert(`"Lumora Journal Reader"\n\nNow opening editorial piece: "${title}"\n\nFull publication available in our print edition & digital archives.`);
    });
  });

  /* ------------------------------------------------------------------------
     14. CONTACT FORM VALIDATION & TOAST FEEDBACK
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const toastMsg = document.getElementById('toast-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const phoneInput = document.getElementById('form-phone');
      const typeInput = document.getElementById('form-type');

      // Helper validation
      function checkInput(input) {
        const parent = input.parentElement;
        if (!input.value.trim()) {
          parent.classList.add('error');
          isValid = false;
        } else {
          parent.classList.remove('error');
        }
      }

      checkInput(nameInput);
      checkInput(emailInput);
      checkInput(phoneInput);
      checkInput(typeInput);

      if (isValid) {
        toastMsg.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
          toastMsg.classList.remove('show');
        }, 5000);
      }
    });
  }

});
