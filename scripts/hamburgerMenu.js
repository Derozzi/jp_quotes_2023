class HamburgerMenu {
  constructor(menuButton, navBarDiv, unorderedList) {
    this.menuButton = menuButton;
    this.navBarDiv = navBarDiv;
    this.unorderedList = unorderedList;
  }

  // Find a way to open the nav div from left to right.
  openNavBar(navBarDiv, unorderedList) {
    let navClassList = navBarDiv.classList;
    let ulClassList = unorderedList.classList;
  }
}

const menu_button = document.querySelector("[hamburgerMenu]");
const nav_div = document.querySelector("[navDiv]");
const unorderedList = document.querySelector("[unorderedList]");
const hamburgerMenu = new HamburgerMenu(menu_button, nav_div, unorderedList);

menu_button.addEventListener("click", () => {
  hamburgerMenu.openNavBar(nav_div, unorderedList);
});
