// Function allows to expand menu from navigation tab

export function expandMenu(event) {
  const listExtendable = event.target.offsetParent;
  const listItemArrow = listExtendable.querySelector(".arrow-icon");
  const listItem = listExtendable.querySelector(".item-content");
  listItemArrow.classList.toggle("on");
  listItem.classList.toggle("on");
}
