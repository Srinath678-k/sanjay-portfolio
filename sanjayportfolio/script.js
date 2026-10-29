/**
 * ============================================================================
 * SANJAYRAM J // CINEMATIC PORTFOLIO JAVASCRIPT
 * Features:
 * - GSAP 3D ScrollTrigger Animations
 * - 3D Mouse Parallax on Hero Portrait
 * - Data-Driven Projects Array (Add projects without touching HTML)
 * - 3-Tab Full-Screen Modal (Watch, Script, Storyboard)
 * - Enlarged Frame Lightbox with Arrow Keys & Touch Swipe
 * - Video Auto-Pause on Modal Close or Tab Switch
 * - Respects prefers-reduced-motion
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. PROJECT DATA ARRAY
     Easily add or modify projects here! No HTML modification needed.
     -------------------------------------------------------------------------- */
  const projectsData = [
    {
      id: "beggar-and-dog",
      title: "The Beggar & The Dog",
      category: "AI SHORT FILM",
      badge: "FEATURED PRODUCTION",
      oneLiner: "An old beggar and a loyal street dog become inseparable companions, but after losing his beloved dog, the beggar finds a helpless puppy and discovers hope and friendship again.",
      synopsis: "An old beggar walks from place to place in the evening, asking people for food, but nobody helps him. Finally, a kind shopkeeper gives him a bun. When the beggar shares it with a hungry street dog, the two form an inseparable bond. Their loyal friendship endures danger, tragedy, and grief until the beggar discovers a helpless puppy and finds hope again.",
      thumbnail: "images/beggar-dog-thumb.jpg",
      videoUrl: "videos/beggar-and-dog.mp4",
      scriptPdf: "files/beggar-and-dog-script.pdf",
      // 41 Storyboard frames extracted in chronological sequence
      storyboardImages: Array.from({ length: 41 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return `images/storyboard/${num}.jpg`;
      }),
      screenplay: [
        {
          type: "characters",
          title: "CHARACTERS",
          items: [
            "BEGGAR – An old, poor but kind-hearted man.",
            "DOG – A hungry street dog who becomes the beggar's loyal companion.",
            "SHOPKEEPER – A kind woman.",
            "THIEF – A man attempting to rob the shop.",
            "TEA SHOP MAN – An angry customer.",
            "DRIVER – A careless driver.",
            "PUPPY – A small, helpless street puppy."
          ]
        },
        {
          scene: "SCENE 1 – EXT. STREET – EVENING",
          action: "The sun is setting. An OLD BEGGAR walks slowly along a busy street. He approaches several PEOPLE and holds out his hand.",
          dialogue: [
            { character: "BEGGAR", line: "Please... do you have anything to eat?" }
          ],
          postAction: "The people ignore him and walk away. The beggar looks tired and hungry. He finally notices a small shop and slowly walks toward it."
        },
        {
          scene: "SCENE 2 – EXT. SMALL SHOP – EVENING",
          action: "The BEGGAR stands near the shop.",
          dialogue: [
            { character: "BEGGAR", line: "Sister... do you have anything to eat? Please give me some food if you have any." }
          ],
          postAction: "The SHOPKEEPER looks at him with sympathy. She takes out a BUN and gives it to him.",
          dialogue2: [
            { character: "SHOPKEEPER", line: "Here. Take this." },
            { character: "BEGGAR", line: "Thank you, sister. May you live a good and happy life." }
          ],
          after: "The shopkeeper smiles. The beggar walks away."
        },
        {
          scene: "SCENE 3 – EXT. STREET CORNER – EVENING",
          action: "The beggar sits down near a wall and opens the bun. Just as he is about to eat, a HUNGRY STREET DOG slowly approaches him. The dog looks at the bun and then sadly looks at the beggar. The beggar notices the dog's hungry eyes and smiles gently.",
          dialogue: [
            { character: "BEGGAR", line: "Eat, my friend... you're hungry too." }
          ],
          postAction: "He breaks the bun into two pieces and gives one to the dog. The dog happily eats it. The beggar finishes his food, gets up and starts walking away. The dog follows him.",
          dialogue2: [
            { character: "BEGGAR", line: "Are you coming with me?" }
          ],
          after: "The dog wags its tail. The beggar smiles. They walk away together."
        },
        {
          scene: "SCENE 4 – EXT. STREET / SHOP – NIGHT",
          action: "The beggar is sleeping near the roadside. The DOG sleeps beside him. Nearby, the shop is closed. A THIEF quietly approaches the shop and starts trying to break open the door. [SFX: METAL CLANGING]. The beggar wakes up and sees the thief.",
          dialogue: [
            { character: "BEGGAR", line: "Hey! What are you doing?" },
            { character: "THIEF", line: "Stay out of this, old man!" }
          ],
          postAction: "The beggar tries to stop him. The thief pushes and attacks the beggar. The DOG suddenly wakes up! Seeing the beggar in danger, the dog runs toward the thief and bites his leg.",
          dialogue2: [
            { character: "THIEF", line: "Aah! Get away!" }
          ],
          after: "The dog barks aggressively. The frightened thief runs away into the darkness. The beggar pats his dog gently: 'You saved me... my friend.'"
        },
        {
          scene: "SCENE 5 – EXT. STREETS – DAY / PASSAGE OF TIME",
          action: "Montage: The beggar and the dog walk together. The dog sleeps beside him. The beggar shares food. Their friendship grows stronger each passing day."
        },
        {
          scene: "SCENE 6 – EXT. TEA SHOP – DAY",
          action: "The DOG is alone and hungry, searching for food near a tea shop. A MAN buys tea and a bun, setting the bun on a bench. The hungry dog slowly approaches and takes the bun.",
          dialogue: [
            { character: "TEA SHOP MAN", line: "Hey! That's my bun!" }
          ],
          postAction: "The man angrily throws a stone. The terrified dog dashes across the busy road."
        },
        {
          scene: "SCENE 7 – EXT. ROAD – DAY",
          action: "The dog runs in fear. A CAR speeds toward it. [SFX: CAR HORN, BRAKES, BANG!]. The car hits the dog and speeds away without stopping. The dog lies injured. Soon, the BEGGAR arrives, horrified.",
          dialogue: [
            { character: "BEGGAR", line: "My friend... please... get up." }
          ],
          postAction: "There is no response. The beggar breaks down, weeping, holding the dog close to his chest."
        },
        {
          scene: "SCENE 8 – EXT. UNDER A TREE – EVENING",
          action: "The beggar carries his companion to a peaceful spot under a solitary tree. With tears streaming down, he buries the loyal dog.",
          dialogue: [
            { character: "BEGGAR", line: "You were not just a dog... you were my only friend." }
          ],
          postAction: "The beggar sits silently beside the grave until darkness falls."
        },
        {
          scene: "SCENE 9 – EXT. STREET – PASSAGE OF TIME",
          action: "The beggar walks alone. He stares at the empty spot beside him on the footpath, missing his friend deeply."
        },
        {
          scene: "SCENE 10 – EXT. UNDER THE TREE – RAINY DAY",
          action: "Rain begins to pour. The beggar returns to the tree where his dog was laid to rest. Suddenly, he hears a faint sound: [SFX: PUPPY CRYING]. He looks behind the foliage and finds a small, drenched, helpless street puppy.",
          dialogue: [
            { character: "BEGGAR", line: "Don't worry... you're not alone anymore." }
          ],
          postAction: "Through his tears, a gentle smile returns. He scoops the puppy into his embrace and walks forward through the rain. [FADE OUT. THE END]"
        }
      ]
    },
    {
      id: "mini-campaign-ad",
      title: "Mini Campaign Advertisement",
      category: "COMMERCIAL VFX & MOTION",
      badge: "COMMERCIAL WORK",
      oneLiner: "A high-energy, fast-paced commercial campaign focusing on creative cinematography, dynamic transitions, and modern digital advertising.",
      synopsis: "A high-impact promotional advertisement created for dynamic digital campaigns. Featuring creative pacing, stylized motion graphics, sharp cuts, and sound-driven visual storytelling.",
      thumbnail: "images/campaign-ad-thumb.jpg",
      videoUrl: "videos/mini-campaign-ad.mp4",
      scriptPdf: null,
      storyboardImages: [],
      screenplay: [
        {
          type: "characters",
          title: "CAMPAIGN BREAKDOWN",
          items: [
            "FORMAT: 9:16 & 16:9 Multi-platform Commercial",
            "STYLE: Dynamic Fast-Cut Editing & Motion Design",
            "TOOLS: Adobe Premiere Pro, After Effects, Photoshop",
            "DIRECTOR & EDITOR: Sanjayram J"
          ]
        },
        {
          scene: "CONCEPT & PACING OVERVIEW",
          action: "A punchy promotional commercial designed to grab attention within the first 3 seconds through rhythmic cutting and cinematic grading.",
          dialogue: [],
          postAction: "Built for modern brand campaigns, social reels, and high-conversion visual marketing."
        }
      ]
    }
  ];

  /* --------------------------------------------------------------------------
     2. DOM ELEMENTS & STATE
     -------------------------------------------------------------------------- */
  const navElement = document.getElementById('cinematicNav');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const projectsGrid = document.getElementById('projectsGrid');
  const heroPortrait = document.getElementById('heroPortrait');

  // Modal elements
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalOneLiner = document.getElementById('modalOneLiner');
  const modalSynopsisText = document.getElementById('modalSynopsisText');
  const modalScriptPdfBtn = document.getElementById('modalScriptPdfBtn');
  const modalFrameCount = document.getElementById('modalFrameCount');
  const projectVideoPlayer = document.getElementById('projectVideoPlayer');
  const videoSource = document.getElementById('videoSource');
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalTabPanes = {
    watch: document.getElementById('tabPaneWatch'),
    script: document.getElementById('tabPaneScript'),
    storyboard: document.getElementById('tabPaneStoryboard')
  };
  const screenplayReader = document.getElementById('screenplayReader');
  const storyboardGalleryGrid = document.getElementById('storyboardGalleryGrid');

  // Enlarged Lightbox elements
  const storyboardLightbox = document.getElementById('storyboardLightbox');
  const lbBackdrop = document.getElementById('lbBackdrop');
  const lbCloseBtn = document.getElementById('lbCloseBtn');
  const lbPrevBtn = document.getElementById('lbPrevBtn');
  const lbNextBtn = document.getElementById('lbNextBtn');
  const lbImage = document.getElementById('lbImage');
  const lbCounter = document.getElementById('lbCounter');

  // Active state tracking
  let currentActiveProject = null;
  let currentLightboxImages = [];
  let currentLightboxIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // Accessibility check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------------------
     3. RENDER PROJECT CARDS DYNAMICALLY
     -------------------------------------------------------------------------- */
  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    projectsData.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card-3d';
      card.setAttribute('data-project-id', proj.id);

      const hasStoryboard = proj.storyboardImages && proj.storyboardImages.length > 0;
      const frameCount = hasStoryboard ? proj.storyboardImages.length : 0;

      card.innerHTML = `
        <div class="project-thumb-box">
          <img 
            src="${proj.thumbnail}" 
            alt="${proj.title}" 
            class="project-thumb-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='images/beggar-dog-thumb.jpg';"
          >
          <div class="project-thumb-overlay">
            <div class="play-hover-indicator" aria-label="Open Project Player">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span class="project-card-badge">${proj.badge || proj.category}</span>
        </div>

        <div class="project-card-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-one-liner">${proj.oneLiner}</p>

          <div class="project-card-footer">
            <div class="project-features-meta">
              <span class="meta-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Video
              </span>
              ${hasStoryboard ? `
                <span class="meta-chip has-storyboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  ${frameCount} Frames
                </span>
              ` : ''}
            </div>

            <button class="btn-view-project" data-project-id="${proj.id}">
              <span>VIEW</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      `;

      // Click on card or view button opens modal
      card.addEventListener('click', () => openProjectModal(proj.id));
      projectsGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
     4. FULL-SCREEN MODAL / LIGHTBOX LOGIC
     -------------------------------------------------------------------------- */
  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    currentActiveProject = project;

    // Populate metadata
    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalOneLiner.textContent = project.oneLiner;
    modalSynopsisText.textContent = project.synopsis || project.oneLiner;

    // Setup Video Player
    videoSource.src = project.videoUrl;
    projectVideoPlayer.poster = project.thumbnail;
    projectVideoPlayer.load();

    // Setup Script Tab
    if (project.scriptPdf) {
      modalScriptPdfBtn.href = project.scriptPdf;
      modalScriptPdfBtn.style.display = 'inline-flex';
    } else {
      modalScriptPdfBtn.style.display = 'none';
    }

    // Render Screenplay Text
    renderScreenplay(project.screenplay);

    // Setup Storyboard Tab
    const hasStoryboard = project.storyboardImages && project.storyboardImages.length > 0;
    const storyboardTabBtn = document.querySelector('.modal-tab-btn[data-tab="storyboard"]');
    
    if (hasStoryboard) {
      modalFrameCount.textContent = project.storyboardImages.length;
      storyboardTabBtn.style.display = 'inline-flex';
      renderStoryboardGrid(project.storyboardImages);
    } else {
      storyboardTabBtn.style.display = 'none';
    }

    // Reset to Watch Tab by default
    switchModalTab('watch');

    // Show modal
    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // CRITICAL REQUIREMENT: Pause video when modal closes
    if (projectVideoPlayer) {
      projectVideoPlayer.pause();
    }
  }

  function switchModalTab(tabKey) {
    modalTabBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === tabKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    Object.keys(modalTabPanes).forEach(key => {
      if (modalTabPanes[key]) {
        modalTabPanes[key].classList.toggle('active', key === tabKey);
      }
    });

    // Auto-pause video if user leaves the Watch tab
    if (tabKey !== 'watch' && projectVideoPlayer && !projectVideoPlayer.paused) {
      projectVideoPlayer.pause();
    }
  }

  function renderScreenplay(screenplayData) {
    if (!screenplayReader) return;
    if (!screenplayData || screenplayData.length === 0) {
      screenplayReader.innerHTML = '<p class="action-desc">Screenplay format being documented.</p>';
      return;
    }

    let html = '';
    screenplayData.forEach(item => {
      if (item.type === 'characters') {
        html += `<h3 class="scene-heading">${item.title}</h3><ul style="list-style: none; margin: 0.8rem 0 1.5rem 0;">`;
        item.items.forEach(c => {
          html += `<li style="margin-bottom: 6px; color: #cfcfdc;">• ${c}</li>`;
        });
        html += `</ul>`;
      } else {
        html += `<h3 class="scene-heading">${item.scene}</h3>`;
        if (item.action) {
          html += `<p class="action-desc">${item.action}</p>`;
        }
        if (item.dialogue && item.dialogue.length > 0) {
          item.dialogue.forEach(d => {
            html += `
              <div class="dialogue-block">
                <span class="char-name">${d.character}</span>
                <span class="char-line">"${d.line}"</span>
              </div>
            `;
          });
        }
        if (item.postAction) {
          html += `<p class="action-desc">${item.postAction}</p>`;
        }
        if (item.dialogue2 && item.dialogue2.length > 0) {
          item.dialogue2.forEach(d => {
            html += `
              <div class="dialogue-block">
                <span class="char-name">${d.character}</span>
                <span class="char-line">"${d.line}"</span>
              </div>
            `;
          });
        }
        if (item.after) {
          html += `<p class="action-desc">${item.after}</p>`;
        }
      }
    });

    screenplayReader.innerHTML = html;
  }

  function renderStoryboardGrid(images) {
    if (!storyboardGalleryGrid) return;
    storyboardGalleryGrid.innerHTML = '';

    images.forEach((imgSrc, index) => {
      const card = document.createElement('div');
      card.className = 'storyboard-card';
      const frameNum = String(index + 1).padStart(2, '0');

      card.innerHTML = `
        <img src="${imgSrc}" alt="Storyboard Frame ${frameNum}" loading="lazy">
        <span class="frame-num">#${frameNum}</span>
      `;

      card.addEventListener('click', () => {
        openStoryboardLightbox(images, index);
      });

      storyboardGalleryGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
     5. ENLARGED STORYBOARD FRAME LIGHTBOX WITH PREV/NEXT
     -------------------------------------------------------------------------- */
  function openStoryboardLightbox(images, index) {
    currentLightboxImages = images;
    currentLightboxIndex = index;
    updateLightboxFrame();

    storyboardLightbox.classList.add('active');
    storyboardLightbox.setAttribute('aria-hidden', 'false');
  }

  function closeStoryboardLightbox() {
    storyboardLightbox.classList.remove('active');
    storyboardLightbox.setAttribute('aria-hidden', 'true');
  }

  function updateLightboxFrame() {
    if (!currentLightboxImages.length) return;
    const currentSrc = currentLightboxImages[currentLightboxIndex];
    lbImage.src = currentSrc;
    const currentNum = String(currentLightboxIndex + 1).padStart(2, '0');
    const totalNum = String(currentLightboxImages.length).padStart(2, '0');
    lbCounter.textContent = `FRAME ${currentNum} / ${totalNum}`;
  }

  function nextLightboxFrame() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateLightboxFrame();
  }

  function prevLightboxFrame() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightboxFrame();
  }

  /* --------------------------------------------------------------------------
     6. EVENT LISTENERS: TABS, CLOSING, ESC KEY, ARROWS
     -------------------------------------------------------------------------- */
  // Tab clicks
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      switchModalTab(tabKey);
    });
  });

  // Modal close triggers: Close button, Backdrop click
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // Lightbox close triggers
  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeStoryboardLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeStoryboardLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightboxFrame);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightboxFrame);

  // Keyboard navigation: Escape and Arrow Keys
  window.addEventListener('keydown', (e) => {
    if (storyboardLightbox && storyboardLightbox.classList.contains('active')) {
      if (e.key === 'ArrowRight') {
        nextLightboxFrame();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxFrame();
      } else if (e.key === 'Escape') {
        closeStoryboardLightbox();
      }
    } else if (projectModal && projectModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    }
  });

  // Touch Swipe for mobile storyboard lightbox
  if (storyboardLightbox) {
    storyboardLightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    storyboardLightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleLightboxSwipe();
    }, { passive: true });
  }

  function handleLightboxSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextLightboxFrame(); // Swiped left -> next
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevLightboxFrame(); // Swiped right -> prev
    }
  }

  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION CONTROLLER
     -------------------------------------------------------------------------- */
  const cinemaToast = document.getElementById('cinemaToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastCloseBtn = document.getElementById('toastCloseBtn');
  let toastTimer = null;

  function showToast(title, message) {
    if (!cinemaToast) return;
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    cinemaToast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      cinemaToast.classList.remove('show');
    }, 4500);
  }

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      cinemaToast.classList.remove('show');
    });
  }

  /* --------------------------------------------------------------------------
     8. COMPACT RESUME BUTTON LOGIC (Nav & Hero)
     -------------------------------------------------------------------------- */
  function handleResumeButtonClick(e) {
    e.preventDefault();
    showToast(
      "Resume Coming Soon", 
      "The official PDF resume is being finalized. In the meantime, feel free to email or call for credential inquiries."
    );
  }

  const resumeBtnNav = document.getElementById('resumeBtnNav');
  const resumeBtnHero = document.getElementById('resumeBtnHero');

  if (resumeBtnNav) resumeBtnNav.addEventListener('click', handleResumeButtonClick);
  if (resumeBtnHero) resumeBtnHero.addEventListener('click', handleResumeButtonClick);

  /* --------------------------------------------------------------------------
     9. INTERACTIVE CONTACT FORM SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatusMsg = document.getElementById('formStatusMsg');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        if (formStatusMsg) {
          formStatusMsg.className = 'form-status-msg error';
          formStatusMsg.textContent = 'Please fill out all fields before sending.';
        }
        return;
      }

      // Visual button feedback
      const originalBtnText = contactSubmitBtn.innerHTML;
      contactSubmitBtn.innerHTML = `
        <span class="btn-text">PREPARING...</span>
      `;
      contactSubmitBtn.disabled = true;

      setTimeout(() => {
        contactSubmitBtn.innerHTML = originalBtnText;
        contactSubmitBtn.disabled = false;
        contactForm.reset();

        if (formStatusMsg) {
          formStatusMsg.className = 'form-status-msg success';
          formStatusMsg.textContent = 'Message captured! Opening mail client...';
        }

        showToast(
          "Message Received!", 
          `Thank you, ${name}! Opening your email client to send directly to Sanjayram J.`
        );

        // Mailto trigger as guaranteed direct transport
        const mailtoUri = `mailto:sanjayram14310@gmail.com?subject=${encodeURIComponent('Project Inquiry from ' + name)}&body=${encodeURIComponent('Full Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
        window.location.href = mailtoUri;
      }, 600);
    });
  }

  /* --------------------------------------------------------------------------
     10. MOBILE NAVIGATION TOGGLE
     -------------------------------------------------------------------------- */
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
    });

    // Close mobile nav when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navElement.classList.add('nav-scrolled');
    } else {
      navElement.classList.remove('nav-scrolled');
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     8. 3D INTERACTIVE TILT ON HERO PORTRAIT
     Desktop: follows mouse smoothly
     Mobile: reacts subtly to scroll
     -------------------------------------------------------------------------- */
  function initHeroPortraitTilt() {
    if (!heroPortrait || prefersReducedMotion) return;

    const portraitCard = heroPortrait;

    // Desktop Mouse Tilt
    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 1024) return;

      const rect = portraitCard.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Mouse distance from center of portrait
      const deltaX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      const rotateY = deltaX * 12; // -12 to 12 deg
      const rotateX = -deltaY * 12; // -12 to 12 deg

      portraitCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    portraitCard.addEventListener('mouseleave', () => {
      portraitCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });

    // Mobile scroll tilt
    if (window.innerWidth < 1024) {
      window.addEventListener('scroll', () => {
        const scrollOffset = window.scrollY;
        const subtleTilt = Math.sin(scrollOffset * 0.005) * 4;
        portraitCard.style.transform = `perspective(800px) rotateX(${subtleTilt.toFixed(2)}deg)`;
      }, { passive: true });
    }
  }

  /* --------------------------------------------------------------------------
     9. CUSTOM AMBIENT CINEMATIC CURSOR
     -------------------------------------------------------------------------- */
  function initCinematicCursor() {
    const cursor = document.getElementById('cinemaCursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    }
    requestAnimationFrame(animateFollower);

    // Hover effect on clickable elements
    const hoverTargets = document.querySelectorAll('a, button, .skill-card-3d, .project-card-3d, .storyboard-card');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => follower.classList.add('hovering'));
      target.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
  }

  /* --------------------------------------------------------------------------
     10. GSAP & SCROLLTRIGGER 3D CINEMATIC ANIMATIONS
     Light, smooth, respecting prefers-reduced-motion
     -------------------------------------------------------------------------- */
  function initScrollAnimations() {
    if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // 1. Watermark drift parallax (Big outline words behind sections)
    const watermarks = document.querySelectorAll('.section-watermark');
    watermarks.forEach(wm => {
      gsap.to(wm, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: wm.closest('section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    });

    // 2. Section headings reveal
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      gsap.from(header, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        }
      });
    });

    // 3. About card 3D tilt & entrance
    const aboutCard = document.querySelector('.about-card-3d');
    if (aboutCard) {
      gsap.from(aboutCard, {
        rotateX: 12,
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutCard,
          start: 'top 82%'
        }
      });
    }

    // 4. Skills cards 3D fly-in from depth
    const skillCards = document.querySelectorAll('.skill-card-3d');
    if (skillCards.length) {
      gsap.from(skillCards, {
        scale: 0.9,
        z: -60,
        rotateX: 10,
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#skillsGrid',
          start: 'top 80%'
        }
      });
    }

    // 5. Education timeline cards
    const eduCards = document.querySelectorAll('.edu-card-3d');
    if (eduCards.length) {
      gsap.from(eduCards, {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.education-timeline',
          start: 'top 80%'
        }
      });
    }

    // 6. Project cards 3D layer entrance
    const projectCards = document.querySelectorAll('.project-card-3d');
    if (projectCards.length) {
      gsap.from(projectCards, {
        y: 70,
        rotateX: 8,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#projectsGrid',
          start: 'top 82%'
        }
      });
    }

    // 7. Contact section entrance (Header & 2-column split)
    const contactHeader = document.querySelector('.contact-header-centered');
    if (contactHeader) {
      gsap.from(contactHeader, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactHeader,
          start: 'top 85%'
        }
      });
    }

    const contactLeft = document.querySelector('.contact-left-col');
    const contactRight = document.querySelector('.contact-right-col');
    if (contactLeft && contactRight) {
      gsap.from(contactLeft, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-split-grid',
          start: 'top 80%'
        }
      });

      gsap.from(contactRight, {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-split-grid',
          start: 'top 80%'
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     11. INITIALIZATION ON DOM READY
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initHeroPortraitTilt();
    initCinematicCursor();

    // Small delay to ensure styles and layouts are calculated before GSAP runs
    setTimeout(() => {
      initScrollAnimations();
    }, 150);
  });

})();

