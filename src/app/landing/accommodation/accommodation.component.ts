import { Component } from '@angular/core';
declare var $: any;
import 'bootstrap-daterangepicker';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {
  // cities = [
  //   { name: 'City 1', image: 'path/to/city1.jpg' },
  //   { name: 'City 2', image: 'path/to/city2.jpg' },
  //   { name: 'City 3', image: 'path/to/city3.jpg' }
  // ];

  // selectedCity!: string;
  // searchInput!: string;

  // selectedBuildingType!: string;
  // stays: string[] = [];
  // priceRange: number = 0;
  // selectedBHK!: string;

  // bhkOptions: string[] = ['1 BHK', '2 BHK', '3 BHK'];

  // fromDate!: string;
  // toDate!: string;

  // // Getter to check if the selected building type is 'residential'
  // get isResidential(): boolean {
  //   return this.selectedBuildingType === 'residential';
  // }

  // onBuildingTypeChange(): void {
  //   this.stays = this.selectedBuildingType === 'commercial'
  //     ? ['Hotels', 'Service Apartments']
  //     : ['Villas', 'Individual Homes', 'Apartments'];
  // }

  // onCityChange(): void {
  //   // Logic for handling city change (optional)
  //   console.log("Selected city:", this.selectedCity);
  // }

  // search(): void {
  //   // Logic for handling search
  //   console.log("Search Input:", this.searchInput);
  //   console.log("Selected City:", this.selectedCity);
  //   console.log("Selected Building Type:", this.selectedBuildingType);
  //   console.log("Selected Stay:", this.selectedCity);
  //   console.log("Price Range:", this.priceRange);
  //   console.log("BHK:", this.selectedBHK);
  //   console.log("From Date:", this.fromDate);
  //   console.log("To Date:", this.toDate);
  // }



  ngOnInit(): void {
    this.initializeDateRangePicker();
  }

  // Initialize the date range picker
  initializeDateRangePicker() {
    $('#daterange').daterangepicker({
      opens: 'left',
      autoApply: true,
      locale: {
        format: 'MM/DD/YYYY'
      }
    });
  }

  onSubmitRoomBooking() {
    // Handle room booking form submission
    console.log('Room booking form submitted');
  }

  onSubmitRentalBooking() {
    // Handle rental booking form submission
    console.log('Rental booking form submitted');
  }



  selectedDate: any;
  selectedDateOut: any;

  constructor() {
    this.selectedDate = null;
    this.selectedDateOut = null;
  }

}
