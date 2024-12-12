import { Component } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';


@Component({
  selector: 'app-demo-dashboard',
  templateUrl: './demo-dashboard.component.html',
  styleUrls: ['./demo-dashboard.component.scss']
})
export class DemoDashboardComponent {

  rowData = [
    { sNo: 1, company: 'Company A', position: 'Software Engineer', ctc: '$100,000', offerLetter: 'offerA.pdf', status: 'Accepted' },
    { sNo: 2, company: 'Company B', position: 'Product Manager', ctc: '$120,000', offerLetter: 'offerB.pdf', status: 'Accepted' },
    { sNo: 3, company: 'Company C', position: 'Data Scientist', ctc: '$110,000', offerLetter: 'offerC.pdf', status: 'Accepted' },
    { sNo: 4, company: 'Company D', position: 'UX Designer', ctc: '$90,000', offerLetter: 'offerD.pdf', status: 'Accepted' },
    { sNo: 5, company: 'Company E', position: 'DevOps Engineer', ctc: '$105,000', offerLetter: 'offerE.pdf', status: 'Accepted' },
  ];

  constructor() {}
  selectedVerification: string = 'institution'; // Default to 'Institution Verification'

  selectVerification(verificationType: string): void {
    this.selectedVerification = verificationType;
  }
  



  cities = [
    { name: 'City 1', image: 'path/to/city1.jpg' },
    { name: 'City 2', image: 'path/to/city2.jpg' },
    { name: 'City 3', image: 'path/to/city3.jpg' }
  ];
  
  selectedCity!: string;
  searchInput!: string;
  
  selectedBuildingType!: string;
  stays: string[] = [];
  priceRange: number = 0;
  selectedBHK!: string;
  
  bhkOptions: string[] = ['1 BHK', '2 BHK', '3 BHK'];

  fromDate!: string;
  toDate!: string;

  get isResidential(): boolean {
    return this.selectedBuildingType === 'residential';
  }

  onBuildingTypeChange(): void {
    this.stays = this.selectedBuildingType === 'commercial'
      ? ['Hotels', 'Service Apartments']
      : ['Villas', 'Individual Homes', 'Apartments'];
  }

  onCityChange(): void {
    // Logic for handling city change (optional)
    console.log("Selected city:", this.selectedCity);
  }

  search(): void {
    // Logic for handling search
    console.log("Search Input:", this.searchInput);
    console.log("Selected City:", this.selectedCity);
    console.log("Selected Building Type:", this.selectedBuildingType);
    console.log("Selected Stay:", this.selectedCity);
    console.log("Price Range:", this.priceRange);
    console.log("BHK:", this.selectedBHK);
    console.log("From Date:", this.fromDate);
    console.log("To Date:", this.toDate);
  }



  isToggled: boolean = false; // Initialize toggled state
  activeComponent: string = 'myOffers'; // Default active component

  toggleSidebar() {
    this.isToggled = !this.isToggled; // Toggle the state
  }

  setActiveComponent(component: string) {
    this.activeComponent = component; // Set the active component based on click
  }
}
