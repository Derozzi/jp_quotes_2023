class HamburgerMenu {
  constructor(menuButton, navBarDiv, unorderedList) {
    this.menuButton = menuButton;
    this.navBarDiv = navBarDiv;
    this.unorderedList = unorderedList;
  }

  openNavBar(navBarDiv) {
    let navClassList = this.navBarDiv.classList;
    navClassList.toggle("w-0");
    navClassList.toggle("w-full");
  }
}

const menu_button = document.querySelector("[hamburgerMenu]");
const nav_div = document.querySelector("[navDiv]");
const unorderedList = document.querySelector("[unorderedList]");
const hamburgerMenu = new HamburgerMenu(menu_button, nav_div, unorderedList);

menu_button.addEventListener("click", () => {
  hamburgerMenu.openNavBar(nav_div);
});
