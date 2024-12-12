import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  // candidatename: any;
  // onCandidateSignup() {
  // throw new Error('Method not implemented.');
  // }
  // candidateUsername: any;
  // candidatePassword: any;
  // candidatePAN: any;
  // onCompanySignup() {
  // throw new Error('Method not implemented.');
  // }
  // companyName: any;
  // companyAddress: any;
  // companyUsername: any;
  // companyPassword: any;

// Candidate signup model
candidate = {
  name: '',
  username: '',
  password: '',
  panCard: ''
};

// Company signup model
company = {
  companyName: '',
  companyAddress: '',
  username: '',
  password: ''
};

constructor(private authService: AuthService) {}

// Handle candidate signup form submission
onCandidateSignup() {
  this.authService.signupCandidate(this.candidate).subscribe(
    response => {
      console.log('Candidate Signup success:', response);
    },
    error => {
      console.error('Candidate Signup error:', error);
    }
  );
}

// Handle company signup form submission
onCompanySignup() {
  this.authService.signupCompany(this.company).subscribe(
    response => {
      console.log('Company Signup success:', response);
    },
    error => {
      console.error('Company Signup error:', error);
    }
  );
}
}