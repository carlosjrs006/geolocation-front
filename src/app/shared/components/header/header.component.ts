import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private router: Router, private elementRef: ElementRef) { }

  collapseNavbar(): void {
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      const isCollapsed = navbarCollapse.classList.contains('show');
      if (isCollapsed) {
        navbarToggler.click(); // Fecha o menu
      }
    }
  }
}
