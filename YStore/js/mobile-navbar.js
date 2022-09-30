class MobileNavbar {
    constructor(mobileMenu, navUl, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navUl = document.querySelector(navUl);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log ("Hey ih"));
    }

    init() {
        if (this.mobileMenu) {
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(   
    ".mobile-menu",
    ".nav ul",
    ".nav li",
);