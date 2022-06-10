import { expandMenu } from "./expandMenu.js";
import { expandMobileMenu } from "./expandMobileMenu.js";

const expandListItem = document.querySelectorAll(".list-extendable");
const mobileMenuBtn = document.querySelector(".bi-list");

// Event listeners for actual and new expanding list elements

expandListItem.forEach((item) => {
  item.addEventListener("click", expandMenu);
});

mobileMenuBtn.addEventListener("click", expandMobileMenu);
