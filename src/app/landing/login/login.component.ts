import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // username: string = '';
  // password: string = '';
  // errorMessage: string = '';

  // constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   if (this.authService.login(this.username, this.password)) {
  //     const role = this.authService.getRole();
  //     if (role === 'company') {
  //       this.router.navigate(['/company']);
  //     } else if (role === 'candidate') {
  //       this.router.navigate(['/candidate']);
  //     } else if (role === 'company-hr') {
  //       this.router.navigate(['/company-hr']);
  //     } else if (role === 'police') {
  //       this.router.navigate(['/police']);
  //     } else if (role === 'institute') {
  //       this.router.navigate(['/institute']);
  //     }
  //   } else {
  //     this.errorMessage = 'Invalid credentials';
  //   }
  // }

  loginForm = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  // Handle login on form submission
  onLogin() {
    const loginData = {
      username: this.loginForm.username,
      password: this.loginForm.password
    };
  
    this.authService.login(loginData).subscribe(
      (response: any) => {
        console.log('Login success:', response);
        localStorage.setItem('authToken', response.token);  // Store token
        this.redirectUser(response.role);  // Use role from backend to redirect
      },
      (error: any) => {
        console.error('Login error:', error);
        this.errorMessage = error?.error?.msg || 'Invalid credentials, please try again.';
      }
    );
  }


  // Redirect user based on the role from the backend
  private redirectUser(role: string): void {
  if (role === 'candidate') {
    this.router.navigate(['/candidate']);  // Navigate to the candidate dashboard
  } else if (role === 'company') {
    this.router.navigate(['/company']);  // Navigate to the company dashboard
  } else if (role === 'company-hr') {
    this.router.navigate(['/company-hr']);  // Navigate to the company HR dashboard
  } else if (role === 'police') {
    this.router.navigate(['/police']);  // Navigate to the police dashboard
  } else if (role === 'institute') {
    this.router.navigate(['/institute']);  // Navigate to the institute dashboard
  } else {
    this.router.navigate(['/landing']);  // Default fallback if no role matches
  }
  }

}
