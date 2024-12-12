import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent {



  isToggled: boolean = false; // Initialize toggled state
  activeComponent: string = 'issueoffers'; // Default active component
  selectedOfferBlockId: string | null = null; // To hold the selected candidate's offerBlockId

  toggleSidebar() {
    this.isToggled = !this.isToggled; // Toggle the state
  }

  setActiveComponent(component: string, offerBlockId?: string) {
    this.activeComponent = component; // Set the active component based on click
    if (offerBlockId) {
      this.selectedOfferBlockId = offerBlockId; // Set the selected offerBlockId
    } else {
      this.selectedOfferBlockId = null; // Reset if not a candidate profile
    }
  }


}
