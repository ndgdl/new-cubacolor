import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  updateNavbar() {
    const bannerHeight = document.getElementById("banner").offsetHeight;
    const navbarHeight = this.element.offsetHeight;
    const triggerHeight = bannerHeight - navbarHeight;
    if (window.scrollY <= triggerHeight) {
      this.element.classList.add("no-bg")
    } else {
      this.element.classList.remove("no-bg")
    }
  }
}
