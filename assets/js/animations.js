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

  /* ---- Mobile menu toggle ------------------------------------------------ */
  function initMobileMenu() {
    const toggle = document.querySelector(".navbar__toggle");
    const links = document.querySelector(".navbar__links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
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
  };

  document.addEventListener("DOMContentLoaded", () => {
    initNavbarScroll();
    initMobileMenu();
    initScrollReveal();
  });
})();
