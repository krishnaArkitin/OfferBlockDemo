import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent {


  constructor(private authService: AuthService, private router: Router) {}
  
  isToggled: boolean = false; // Initialize toggled state
  activeComponent: string = 'myOffers'; // Default active component

  toggleSidebar() {
    this.isToggled = !this.isToggled; // Toggle the state
  }

  setActiveComponent(component: string) {
    this.activeComponent = component; // Set the active component based on click
  }

  
  logout(): void {
    this.authService.logout();  // Call the logout method from AuthService
    this.router.navigate(['/login']);  // Redirect to the login page after logout
  }


}
