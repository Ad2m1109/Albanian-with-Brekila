/**
 * main.js
 * ---------------------------------------------------------------------------
 * Renders every dynamic section of the site from the content objects in
 * data.js. Nothing in here is page-specific markup — each function looks
 * for a mount point by id/data-attribute and only runs if that mount point
 * exists on the current page, so a single script file works across all
 * five pages.
 *
 * When this migrates to Next.js, each render* function becomes a component
 * and each ICONS entry becomes an .svg import or an icon component.
 * ---------------------------------------------------------------------------
 */

(function () {
  "use strict";

  /* =========================================================================
     ICON LIBRARY
     Small, line-based SVGs. Kept as template strings so they can be dropped
     directly into innerHTML; each uses currentColor so it inherits context.
     ========================================================================= */
  const ICONS = {
    check: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    star: `★`,
    clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    users: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="17.5" cy="9" r="2.3" stroke="currentColor" stroke-width="1.5"/><path d="M15.7 14.2c2.7.3 4.8 2.6 4.8 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 6.5L12 13l8-6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h3l1.5 5-2.3 1.6a12 12 0 0 0 6.2 6.2L16 13.5l5 1.5v3a2 2 0 0 1-2.2 2C10.6 20 4 13.4 4 5.2A2 2 0 0 1 6 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    pin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.5"/></svg>`,
    chat: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 12.5v-7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    roots: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 10c-3 0-5 2-5.5 5M12 10c3 0 5 2 5.5 5M12 10c-2 2-2.5 4-2 8M12 10c2 2 2.5 4 2 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    map: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.5"/></svg>`,
    calendar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7.5-4.6-9.7-9.3C.9 7 3 4 6.2 4c2 0 3.4 1.1 4.3 2.3.6.8 1.3.8 1.9 0C13.4 5.1 14.8 4 16.8 4 20 4 22.1 7 20.7 10.7 18.5 15.4 12 20 12 20Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    certificate: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M9 14.3 8 21l4-2 4 2-1-6.7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>`,
    youtube: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/></svg>`,
    tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v10.5a3 3 0 1 1-2.4-2.94" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 3c.4 2.2 2 3.9 4.2 4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 21v-7h2.3l.4-3H14.5V9c0-.9.2-1.5 1.6-1.5H17V5h-2c-2.5 0-3.5 1.4-3.5 3.6V11H9.5v3H11.5v7h3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  };

  // One glyph per lesson/course "image" key — simple, distinguishable line icons.
  const CARD_ICONS = {
    private: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="9" stroke="currentColor" stroke-width="2"/><path d="M10 50c1.5-8 7-12 14-12s12.5 4 14 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="46" cy="20" r="5" stroke="currentColor" stroke-width="2" opacity="0.5"/><path d="M38 40c1-4.5 4-7 8-7s6.5 2 8 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/></svg>`,
    kids: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 12 40 28H24L32 12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M32 28v24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M32 36c6 2 6 6 0 8-6-2-6-6 0-8Z" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="46" r="2" fill="currentColor"/></svg>`,
    conversation: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v11a5 5 0 0 1-5 5H20l-7 6v-6h-1a3 3 0 0 1-3-3V18Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M31 27h20a5 5 0 0 1 5 5v9a3 3 0 0 1-3 3h-1v5l-6-5H36a5 5 0 0 1-5-5v-2" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.5"/></svg>`,
    grammar: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h26l6 6v38H16V10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M42 10v6h6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M22 26h20M22 34h20M22 42h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    couples: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26" cy="24" r="8" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="24" r="8" stroke="currentColor" stroke-width="2" opacity="0.55"/><path d="M12 50c1.6-8.6 7.3-13 14-13M52 50c-1.6-8.6-7.3-13-14-13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    groups: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="7" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="26" r="5.5" stroke="currentColor" stroke-width="2" opacity="0.6"/><circle cx="48" cy="26" r="5.5" stroke="currentColor" stroke-width="2" opacity="0.6"/><path d="M20 50c1.3-7.5 6-11.5 12-11.5S43.7 42.5 45 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 48c1-5.5 4-8.5 8.5-9M56 48c-1-5.5-4-8.5-8.5-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/></svg>`,
    a1: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 46 32 14l18 32" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M22 46h20" stroke="currentColor" stroke-width="2"/></svg>`,
    a2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 46 24 20l8 12 8-10 16 24" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
    b1: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 46 20 24l10 10 8-14 20 26" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M6 46h52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    b2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 44 16 30l8 8 10-16 8 10 10-14 6 8" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
    travel: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 34 52 18l-8 30-7-13-13 9 3-11-15-1Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    kidscourse: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 14 12 22l20 8 20-8-20-8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M18 27v10c0 4 6 7 14 7s14-3 14-7V27" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  };

  const CARD_TINTS = {
    private: "var(--color-red-tint-08)", kids: "var(--color-accent-gold-tint)",
    conversation: "var(--color-red-tint-08)", grammar: "var(--color-soft-gray)",
    couples: "var(--color-accent-gold-tint)", groups: "var(--color-red-tint-08)",
  };

  const COURSE_COLOR = { gold: "var(--color-accent-gold)", blue: "var(--color-accent-blue)", red: "var(--color-red)" };
  const COURSE_CHIP = { gold: "chip--gold", blue: "", red: "chip--red" };

  /* =========================================================================
     SIGNATURE SIGNATURE ELEMENT — the wing / ridge divider
     A single continuous line that reads as both a mountain ridge (the
     Albanian Alps) and a folded wing (Shqipëria, "land of eagles"),
     drawn in on scroll. Used sparingly between major sections.
     ========================================================================= */
  function wingDividerSVG() {
    return `<svg class="wing-divider" data-reveal-ignore viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path pathLength="1000" style="--dash-length:1000" d="M2 44 C 30 44, 34 18, 52 18 C 66 18, 66 34, 78 34 C 92 34, 96 8, 112 8 C 128 8, 130 34, 144 34 C 156 34, 158 18, 172 18 C 190 18, 194 44, 218 44"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="112" cy="8" r="2.4" fill="currentColor"/>
    </svg>`;
  }

  function injectWingDividers() {
    document.querySelectorAll("[data-wing-divider]").forEach((el) => {
      el.innerHTML = wingDividerSVG();
    });
  }

  /* =========================================================================
     NAVBAR + FOOTER (shared across every page)
     ========================================================================= */
  function renderNavbar() {
    const mount = document.querySelector("[data-component='navbar']");
    if (!mount) return;
    const current = mount.getAttribute("data-current") || "";

    const links = window.NAV_LINKS.map((link) => {
      const isCurrent = link.href === current;
      return `<li><a href="${link.href}" ${isCurrent ? 'aria-current="page"' : ""}>${link.label}</a></li>`;
    }).join("");

    mount.innerHTML = `
      <div class="navbar__inner">
        <a href="index.html" class="navbar__brand" aria-label="${window.SITE.name} — home">
          ${brandMarkSVG("navbar__mark")}
          <span class="navbar__wordmark">Albanian with <span>Erisa</span></span>
        </a>
        <ul class="navbar__links">${links}</ul>
        <div class="navbar__actions">
          <a href="contact.html" class="btn btn-primary btn-sm">Book a Lesson</a>
          <button class="navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>`;
  }

  function brandMarkSVG(cls) {
    return `<svg class="${cls}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="var(--color-red)"/>
      <path d="M20 9 27 30H13L20 9Z" stroke="var(--color-warm-white)" stroke-width="2" stroke-linejoin="round"/>
      <path d="M16.5 24h7" stroke="var(--color-accent-gold)" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }

  function renderFooter() {
    const mount = document.querySelector("[data-component='footer']");
    if (!mount) return;

    const linkCols = [
      { heading: "Explore", links: window.NAV_LINKS.filter((l) => l.href !== "index.html") },
      { heading: "Lessons", links: window.LESSONS.slice(0, 4).map((l) => ({ label: l.title, href: "lessons.html" })) },
      { heading: "Courses", links: window.COURSES.slice(0, 4).map((c) => ({ label: `${c.level} · ${c.title}`, href: "courses.html" })) },
    ];

    mount.innerHTML = `
      <div class="footer__grid">
        <div>
          <a href="index.html" class="footer__brand">
            ${brandMarkSVG("navbar__mark")}
            <span class="footer__brand-text">Albanian with Erisa</span>
          </a>
          <p class="footer__about">${window.SITE.tagline} Private lessons, structured courses, and conversation practice — all taught by a native speaker.</p>
          <div class="footer__social">
            <a href="${window.SITE.social.instagram}" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="${window.SITE.social.youtube}" aria-label="YouTube">${ICONS.youtube}</a>
            <a href="${window.SITE.social.tiktok}" aria-label="TikTok">${ICONS.tiktok}</a>
            <a href="${window.SITE.social.facebook}" aria-label="Facebook">${ICONS.facebook}</a>
          </div>
        </div>
        ${linkCols
          .map(
            (col) => `
          <div>
            <h3 class="footer__heading">${col.heading}</h3>
            <ul class="footer__links">
              ${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>`
          )
          .join("")}
      </div>
      <div class="footer__bottom">
        <span>&copy; ${new Date().getFullYear()} Albanian with Erisa. All rights reserved.</span>
        <span>Made with care in Tirana, Albania.</span>
      </div>`;
  }

  /* =========================================================================
     HOME PAGE SECTIONS
     ========================================================================= */
  function renderHeroStats() {
    const mount = document.querySelector("[data-component='hero-stats']");
    if (!mount) return;
    const picks = window.STATS.slice(0, 2);
    mount.innerHTML = picks
      .map(
        (s) => `<div><div class="hero__stat-value">${s.value}</div><div class="hero__stat-label">${s.label}</div></div>`
      )
      .join("");
  }

  function renderWhyLearn() {
    const mount = document.querySelector("[data-component='why-learn']");
    if (!mount) return;
    mount.innerHTML = window.WHY_LEARN.map(
      (item) => `
      <div class="value-tile" data-reveal>
        <div class="value-tile__icon">${ICONS[item.icon] || ""}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`
    ).join("");
  }

  function renderStatsStrip() {
    const mount = document.querySelector("[data-component='stats-strip']");
    if (!mount) return;
    mount.innerHTML = window.STATS.map(
      (s) => `<div><div class="stats-strip__value">${s.value}</div><div class="stats-strip__label">${s.label}</div></div>`
    ).join("");
  }

  function renderTeacherPreview() {
    const mount = document.querySelector("[data-component='teacher-preview']");
    if (!mount) return;
    const t = window.TEACHER;
    mount.innerHTML = `
      <div class="teacher__portrait" data-reveal="fade">
        <div class="teacher__quote-tag">
          <p>"${t.philosophy[0].text}"</p>
        </div>
      </div>
      <div data-reveal>
        <span class="eyebrow">Meet your teacher</span>
        <h2 class="section-title">${t.name}</h2>
        <p class="section-lede">${t.shortBio}</p>
        <div class="teacher__credentials">
          ${t.credentials
            .slice(0, 3)
            .map((c) => `<div class="teacher__credential"><strong>${c.value}</strong><span>${c.label}</span></div>`)
            .join("")}
        </div>
        <div style="margin-top:2rem"><a href="about.html" class="btn btn-secondary">Read Erisa's story</a></div>
      </div>`;
  }

  /* =========================================================================
     LESSON CARDS
     ========================================================================= */
  function lessonCardHTML(lesson) {
    return `
      <article class="card" data-reveal data-category="${lesson.category}">
        <div class="card__media" style="background:${CARD_TINTS[lesson.image] || "var(--color-soft-gray)"}; color: var(--color-red);">
          <span class="card__badge">${lesson.category}</span>
          ${CARD_ICONS[lesson.image] || ""}
        </div>
        <div class="card__body">
          <h3 class="card__title">${lesson.title}</h3>
          <p class="card__desc">${lesson.description}</p>
          <ul class="card__features">
            ${lesson.features.map((f) => `<li>${ICONS.check}<span>${f}</span></li>`).join("")}
          </ul>
          <div class="card__meta">
            <span>${ICONS.clock}${lesson.duration}</span>
          </div>
          <div class="card__footer">
            <div class="card__price">$${lesson.price}<span>/session</span></div>
            <a href="contact.html?lesson=${lesson.id}" class="btn btn-primary btn-sm">Book Lesson</a>
          </div>
        </div>
      </article>`;
  }

  function renderLessons() {
    const mount = document.querySelector("[data-component='lesson-grid']");
    if (!mount) return;
    const limit = Number(mount.getAttribute("data-limit")) || window.LESSONS.length;
    mount.innerHTML = window.LESSONS.slice(0, limit).map(lessonCardHTML).join("");
  }

  /* =========================================================================
     COURSE CARDS
     ========================================================================= */
  function courseCardHTML(course) {
    return `
      <article class="card" data-reveal data-level="${course.level}">
        <div class="card__media" style="background: color-mix(in srgb, ${COURSE_COLOR[course.color]} 14%, white); color:${COURSE_COLOR[course.color]};">
          <span class="chip ${COURSE_CHIP[course.color]}">${course.level}</span>
          ${CARD_ICONS[course.image] || ""}
        </div>
        <div class="card__body">
          <h3 class="card__title">${course.title}</h3>
          <p class="card__desc">${course.description}</p>
          <div class="card__meta">
            <span>${ICONS.clock}${course.duration}</span>
            <span>${ICONS.users}${course.lessonsCount} lessons</span>
          </div>
          <div class="card__footer">
            <div class="card__price" style="font-size: var(--fs-body)">Level <span>${course.level}</span></div>
            <a href="contact.html?course=${course.id}" class="btn btn-primary btn-sm">Enroll</a>
          </div>
        </div>
      </article>`;
  }

  function renderCourses() {
    const mount = document.querySelector("[data-component='course-grid']");
    if (!mount) return;
    const limit = Number(mount.getAttribute("data-limit")) || window.COURSES.length;
    mount.innerHTML = window.COURSES.slice(0, limit).map(courseCardHTML).join("");
  }

  /* =========================================================================
     TESTIMONIALS
     ========================================================================= */
  function renderTestimonials() {
    const mount = document.querySelector("[data-component='testimonial-grid']");
    if (!mount) return;
    mount.innerHTML = window.TESTIMONIALS.map(
      (t) => `
      <div class="testimonial-card" data-reveal>
        <div class="testimonial-card__stars" aria-hidden="true">${ICONS.star.repeat(t.rating)}</div>
        <p class="testimonial-card__quote">&ldquo;${t.quote}&rdquo;</p>
        <div class="testimonial-card__person">
          <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        </div>
      </div>`
    ).join("");
  }

  /* =========================================================================
     FAQ
     ========================================================================= */
  function renderFaq() {
    const mount = document.querySelector("[data-component='faq-list']");
    if (!mount) return;
    const limit = Number(mount.getAttribute("data-limit")) || window.FAQ.length;
    mount.innerHTML = window.FAQ.slice(0, limit)
      .map(
        (item, i) => `
      <div class="faq-item" data-open="false" data-reveal>
        <button class="faq-item__question" aria-expanded="false" id="faq-q-${i}" aria-controls="faq-a-${i}">
          <span>${item.question}</span>
          <span class="faq-item__icon" aria-hidden="true"></span>
        </button>
        <div class="faq-item__answer" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
          <div class="faq-item__answer-inner">${item.answer}</div>
        </div>
      </div>`
      )
      .join("");

    if (window.AppAnimations) window.AppAnimations.initFaqAccordion(mount);
  }

  /* =========================================================================
     ABOUT PAGE — full teacher bio, philosophy, values
     ========================================================================= */
  function renderTeacherBio() {
    const mount = document.querySelector("[data-component='teacher-bio']");
    if (!mount) return;
    mount.innerHTML = window.TEACHER.bio.map((p) => `<p>${p}</p>`).join("");
  }

  function renderPhilosophy() {
    const mount = document.querySelector("[data-component='philosophy-list']");
    if (!mount) return;
    mount.innerHTML = window.TEACHER.philosophy
      .map(
        (item, i) => `
      <div class="value-row" data-reveal>
        <div class="value-row__index">0${i + 1}</div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </div>`
      )
      .join("");
  }

  function renderCredentials() {
    const mount = document.querySelector("[data-component='credentials']");
    if (!mount) return;
    mount.innerHTML = window.TEACHER.credentials
      .map((c) => `<div class="teacher__credential"><strong>${c.value}</strong><span>${c.label}</span></div>`)
      .join("");
  }

  /* =========================================================================
     CONTACT INFO + FORM
     ========================================================================= */
  function renderContactInfo() {
    const mount = document.querySelector("[data-component='contact-info']");
    if (!mount) return;
    const s = window.SITE;
    const rows = [
      { icon: "mail", label: "Email", value: s.email, href: `mailto:${s.email}` },
      { icon: "phone", label: "Phone / WhatsApp", value: s.phone, href: `tel:${s.phone.replace(/\s+/g, "")}` },
      { icon: "pin", label: "Location", value: s.location, href: null },
    ];
    mount.innerHTML = rows
      .map(
        (r) => `
      <div class="contact-info__item">
        <div class="contact-info__icon">${ICONS[r.icon]}</div>
        <div>
          <h3>${r.label}</h3>
          ${r.href ? `<a href="${r.href}">${r.value}</a>` : `<p>${r.value}</p>`}
        </div>
      </div>`
      )
      .join("");
  }

  function initContactForm() {
    const form = document.querySelector("[data-component='contact-form']");
    if (!form) return;

    // Pre-select a lesson/course if arriving from a "Book" / "Enroll" link.
    const params = new URLSearchParams(window.location.search);
    const lesson = params.get("lesson");
    const course = params.get("course");
    const interestField = form.querySelector("[name='interest']");
    if (interestField && (lesson || course)) {
      const match = lesson
        ? window.LESSONS.find((l) => l.id === lesson)
        : window.COURSES.find((c) => c.id === course);
      if (match) interestField.value = match.title || match.id;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const successBox = form.querySelector("[data-form-success]");
      if (successBox) successBox.classList.add("is-visible");
      form.reset();
      if (successBox) successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* =========================================================================
     FILTER PILLS (Lessons / Courses pages)
     ========================================================================= */
  function initFilterPills() {
    const row = document.querySelector("[data-component='filter-row']");
    if (!row) return;
    const grid = document.querySelector(row.getAttribute("data-target"));
    if (!grid) return;

    row.addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;
      row.querySelectorAll(".filter-pill").forEach((p) => p.setAttribute("aria-pressed", "false"));
      pill.setAttribute("aria-pressed", "true");

      const filter = pill.getAttribute("data-filter");
      grid.querySelectorAll(".card").forEach((card) => {
        const value = card.getAttribute("data-category") || card.getAttribute("data-level");
        const show = filter === "all" || value === filter;
        card.style.display = show ? "" : "none";
      });
    });
  }

  /* =========================================================================
     BOOT
     ========================================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
    injectWingDividers();

    // Home
    renderHeroStats();
    renderWhyLearn();
    renderTeacherPreview();

    // Shared content blocks
    renderLessons();
    renderCourses();
    renderTestimonials();
    renderFaq();

    // About
    renderTeacherBio();
    renderPhilosophy();
    renderCredentials();
    renderStatsStrip();

    // Contact
    renderContactInfo();
    initContactForm();

    // Interactions that depend on freshly-rendered markup
    initFilterPills();
    if (window.AppAnimations) window.AppAnimations.initScrollReveal();
  });
})();
