import { Component } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent {


  cities: string[] = ['City 1', 'City 2', 'City 3']; // Populate this with actual city names
  selectedCity: string = '';
  fromPlace: string = '';
  toPlace: string = '';
  date: string = '';
  packageWeight: number = 0;
  packageSize: string = '';
  contactNumber: string = '';
  estimatedCost: number = 0;

  searchLogistics(serviceType: string) {
    // Replace this with actual cost estimation logic
    this.estimatedCost = this.packageWeight * 10; // Example cost calculation
  }

  finalizeBooking() {
    const bookingDetails = {
      city: this.selectedCity,
      from: this.fromPlace,
      to: this.toPlace,
      date: this.date,
      weight: this.packageWeight,
      size: this.packageSize,
      contact: this.contactNumber,
      cost: this.estimatedCost,
    };

    // Handle booking confirmation logic here
    console.log('Booking confirmed:', bookingDetails);
    alert('Booking confirmed! Your details have been logged.');
  }


}
