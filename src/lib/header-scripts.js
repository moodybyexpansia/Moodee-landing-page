export function applyHeaderStylesOnScroll() {
  const header = document.querySelector("#header[data-aw-sticky-header]");
  if (!header) return;

  if (window.scrollY > 60 && !header.classList.contains("scroll")) {
    header.classList.add("scroll");
  } else if (window.scrollY <= 60 && header.classList.contains("scroll")) {
    header.classList.remove("scroll");
  }
}

export function toggleMenu() {
  const menuButton = document.querySelector("[data-aw-toggle-menu]");
  const header = document.getElementById("header");
  const nav = document.querySelector("#header nav");

  menuButton.classList.toggle("expanded");
  document.body.classList.toggle("overflow-hidden");
  header.classList.toggle("h-screen");
  header.classList.toggle("expanded");
  header.classList.toggle("bg-page");
  nav.classList.toggle("hidden");
}

export function handleResize() {
  if (window.innerWidth > 767) {
    const menuButton = document.querySelector("[data-aw-toggle-menu]");
    const header = document.getElementById("header");
    const nav = document.querySelector("#header nav");

    menuButton?.classList.remove("expanded");
    document.body.classList.remove("overflow-hidden");
    header?.classList.remove("h-screen", "expanded", "bg-page");
    nav?.classList.add("hidden");
  }
}

export function initializeHeaderScripts() {
  // Gestion du scroll
  document.addEventListener("scroll", applyHeaderStylesOnScroll);

  // Gestion du menu mobile
  const menuButton = document.querySelector("[data-aw-toggle-menu]");
  menuButton?.addEventListener("click", toggleMenu);

  // Redimensionnement de la fenêtre
  window.addEventListener("resize", handleResize);

  // Appliquer les styles initiaux
  applyHeaderStylesOnScroll();
}
