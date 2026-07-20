/**
 * animations.js
 * ---------------------------------------------------------------------------
 * Handles all *behavioral* motion: scroll reveals, navbar state, mobile
 * menu toggling, and the FAQ accordion. Pure content rendering lives in
 * main.js — this file only ever adds/removes classes and attributes.
 * ---------------------------------------------------------------------------
 */

(function () {
  "use strict";

  /* ---- Scroll-reveal via IntersectionObserver -------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll("[data-reveal], [data-reveal-group], .wing-divider");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* ---- Navbar: elevate on scroll ---------------------------------------- */
  function initNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const update = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---- Mobile drawer (<=960px) ------------------------------------------- */
  function initMobileMenu() {
    const toggle = document.querySelector(".navbar__toggle");
    const links = document.querySelector(".navbar__links");
    const overlay = document.querySelector(".navbar__overlay");
    const closeBtn = document.querySelector(".navbar__drawer-close");
    if (!toggle || !links) return;

    function openDrawer() {
      links.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      if (overlay) overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      if (overlay) overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.contains("is-open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close on X button
    if (closeBtn) {
      closeBtn.addEventListener("click", closeDrawer);
    }

    // Close on overlay click
    if (overlay) {
      overlay.addEventListener("click", closeDrawer);
    }

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        closeDrawer();
      }
    });

    // Close on nav link click
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  /* ---- FAQ accordion ------------------------------------------------------ */
  function initFaqAccordion(root) {
    const container = root || document;
    const items = container.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach((item) => {
      const question = item.querySelector(".faq-item__question");
      const answer = item.querySelector(".faq-item__answer");
      if (!question || !answer) return;

      question.addEventListener("click", () => {
        const isOpen = item.getAttribute("data-open") === "true";

        // Close sibling items for a clean single-open accordion.
        items.forEach((sibling) => {
          if (sibling !== item) {
            sibling.setAttribute("data-open", "false");
            sibling.querySelector(".faq-item__question")?.setAttribute("aria-expanded", "false");
            const siblingAnswer = sibling.querySelector(".faq-item__answer");
            if (siblingAnswer) siblingAnswer.style.maxHeight = null;
          }
        });

        item.setAttribute("data-open", String(!isOpen));
        question.setAttribute("aria-expanded", String(!isOpen));
        answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
      });
    });
  }

  // Re-run reveal + faq wiring after main.js injects dynamic content.
  window.AppAnimations = {
    initScrollReveal,
    initFaqAccordion,
    initMobileMenu,
  };

  document.addEventListener("DOMContentLoaded", () => {
    initNavbarScroll();
  });
})();
