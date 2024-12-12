import { Component } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {


  activeForm: string | null = null;
  formData: any = {
    instituteName: '',
    courseName: '',
    graduationYear: '',
    instituteContact: '',
    policeStation: '',
    address: '',
    dob: '',
    criminalRecords: '',
    previousCompany: '',
    positionHeld: '',
    employmentDuration: '',
    supervisorContact: '',
    linkedIn: '',
    otherLinks: '',
    publicActivity: '',
    references: ''
  };

  // Function to handle starting a verification
  startVerification(type: string) {
    this.activeForm = type;
    // Reset form data on new verification
    this.formData = {
      instituteName: '',
      courseName: '',
      graduationYear: '',
      instituteContact: '',
      policeStation: '',
      address: '',
      dob: '',
      criminalRecords: '',
      previousCompany: '',
      positionHeld: '',
      employmentDuration: '',
      supervisorContact: '',
      linkedIn: '',
      otherLinks: '',
      publicActivity: '',
      references: ''
    };
  }

  // Function to handle file changes
  onFileChange(event: any) {
    const file = event.target.files[0];
    // Handle the file as needed, e.g., upload or preview
    console.log(file);
  }

  // Function to handle form submission
  submitVerification(type: string) {
    console.log(`Submitting ${type} verification with data:`, this.formData);
    // Add your logic here to handle submission, such as sending to a backend API
    this.activeForm = null; // Hide the form after submission
  }

}
