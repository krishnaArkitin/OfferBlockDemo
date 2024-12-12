import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



  isScrolled = false;

  // This HostListener listens to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Change this value to whatever scroll height you want the navbar color to change
    if (scrollTop > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
