export function expandMobileMenu() {
  const nav = document.querySelector("nav");
  const menu = nav.querySelector("ul");
  const menuIcon = nav.querySelector("i");
  menu.classList.toggle("mobile-menu");
  menuIcon.classList.toggle("bi-x-lg");
}
