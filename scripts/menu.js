const expandListItem = document.querySelectorAll(".list-extendable");
const mobileMenuBtn = document.querySelector(".bi-list");

function expandDesktopMenu(event) {
  const listExtendable = event.target.offsetParent;
  const listItemArrow = listExtendable.querySelector(".arrow-icon");
  const listItem = listExtendable.querySelector(".item-content");
  listItemArrow.classList.toggle("on");
  listItem.classList.toggle("on");
}

function expandMobileMenu() {
  const nav = document.querySelector("nav");
  const menu = nav.querySelector("ul");
  const menuIcon = nav.querySelector("i");
  menu.classList.toggle("mobile-menu");
  menuIcon.classList.toggle("bi-x-lg");
}

// Event listeners for actual and new expanding list elements

expandListItem.forEach((item) => {
  item.addEventListener("click", expandDesktopMenu);
});

mobileMenuBtn.addEventListener("click", expandMobileMenu);
