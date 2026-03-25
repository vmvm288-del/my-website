console.log("網站已載入");

// =========================
// 區塊進場淡入
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".section-title, .about-panel, .service-intro, .services-grid, .service-note, .works-grid"
  );

  targets.forEach((el, index) => {
    el.classList.add("reveal");

    if (index % 3 === 1) {
      el.classList.add("reveal-delay-1");
    } else if (index % 3 === 2) {
      el.classList.add("reveal-delay-2");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  targets.forEach((el) => observer.observe(el));
});