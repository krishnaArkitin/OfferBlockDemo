import { Component } from '@angular/core';
declare var $: any;  // Declare jQuery

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {

 // Variables for radio buttons and form fields
 tripType: string = 'oneway'; // Default trip type
 selectedFrom: string = ''; // From location
 selectedTo: string = ''; // To location
 departureDate: string = ''; // Departure date
 selectedCarType: string = ''; // Car type
 pickupTime: string = ''; // Pickup time

 // Array of cities and car types
 cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
 carTypes: string[] = ['Sedan', 'SUV', 'Luxury', 'Van'];

 // Variable to control dropdown visibility
 showDropdown: string = ''; // Keeps track of which dropdown is open (e.g., 'from', 'to', 'carType')
document: any;
onSubmitTrainBooking: any;

 // Method to toggle the dropdown visibility
 toggleDropdown(type: string) {
   if (this.showDropdown === type) {
     this.showDropdown = ''; // Close the dropdown if it's already open
   } else {
     this.showDropdown = type; // Open the dropdown
   }
 }

 // Method to select a city (for From and To fields)
 selectCity(type: string, city: string) {
   if (type === 'from') {
     this.selectedFrom = city;
   } else if (type === 'to') {
     this.selectedTo = city;
   }
   this.showDropdown = ''; // Close the dropdown after selection
 }

 // Method to select a car type
 selectCarType(carType: string) {
   this.selectedCarType = carType;
   this.showDropdown = ''; // Close the dropdown after selection
 }

 // Method to swap the From and To cities
 swapCities() {
   const temp = this.selectedFrom;
   this.selectedFrom = this.selectedTo;
   this.selectedTo = temp;
 }

 // Method to handle form submission
 onSubmit() {
   if (this.isValidForm()) {
     const bookingDetails = {
       tripType: this.tripType,
       from: this.selectedFrom,
       to: this.selectedTo,
       departureDate: this.departureDate,
       carType: this.selectedCarType,
       pickupTime: this.pickupTime
     };

     console.log('Booking Details:', bookingDetails);
     // Handle booking logic, e.g., sending to a backend service
   } else {
     console.log('Please fill all required fields.');
   }
 }

 // Method to check if the form is valid
 isValidForm(): boolean {
   return !!this.selectedFrom && !!this.selectedTo && !!this.departureDate && !!this.selectedCarType && !!this.pickupTime;
 }
 
 selectedDate: Date | null = null;

  getFormattedDate(): string {
    return this.selectedDate ? this.selectedDate.toLocaleDateString() : 'No date selected';
  }


  inputDate: any;





  selectedTrainFrom: string = '';
  selectedTrainTo: string = '';
  trainDepartureDate: string = '';
  selectedTrainClass: string = '';
  
  // Array of train classes
  trainClasses: string[] = ['All Class', 'Sleeper', 'Second Sitting', 'First AC', 'Second AC', 'Third AC', 'AC Chair Car'];
  
  // Method to select a train class
  selectTrainClass(trainClass: string) {
    this.selectedTrainClass = trainClass;
    this.showDropdown = ''; // Close the dropdown after selection
  }
  
  // Method to handle train form submission
  onTrainSubmit() {
    if (this.isTrainFormValid()) {
      const trainBookingDetails = {
        from: this.selectedTrainFrom,
        to: this.selectedTrainTo,
        departureDate: this.trainDepartureDate,
        trainClass: this.selectedTrainClass
      };
  
      console.log('Train Booking Details:', trainBookingDetails);
      // Handle train booking logic, e.g., sending to a backend service
    } else {
      console.log('Please fill all required fields.');
    }
  }
  
  // Method to check if the train form is valid
  isTrainFormValid(): boolean {
    return !!this.selectedTrainFrom && !!this.selectedTrainTo && !!this.trainDepartureDate && !!this.selectedTrainClass;
  }

  

}
