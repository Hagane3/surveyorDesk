import { expandDesktopMenu } from "./expandDesktopMenu.js";
import { expandMobileMenu } from "./expandMobileMenu.js";

const expandListItem = document.querySelectorAll(".list-extendable");
const mobileMenuBtn = document.querySelector(".bi-list");

// Event listeners for actual and new expanding list elements

expandListItem.forEach((item) => {
  item.addEventListener("click", expandDesktopMenu);
});

mobileMenuBtn.addEventListener("click", expandMobileMenu);
