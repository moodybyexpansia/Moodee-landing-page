export function initializeHeaderScripts() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.querySelector("[data-toggle-menu]");
    const header = document.querySelector("#header");

    if (toggleMenuButton && header) {
      toggleMenuButton.addEventListener("click", () => {
        header.classList.toggle("expanded");
      });
    }

    let lastScrollPosition = window.scrollY;
    window.addEventListener("scroll", () => {
      const header = document.querySelector("#header[data-sticky-header]");
      if (!header) return;

      if (window.scrollY > 60 && lastScrollPosition <= 60) {
        header.classList.add("scroll");
      } else if (window.scrollY <= 60 && lastScrollPosition > 60) {
        header.classList.remove("scroll");
      }
      lastScrollPosition = window.scrollY;
    });
  });
}
