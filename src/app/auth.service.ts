import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // private isAuthenticated = false; // A flag to track the user's login status
  // private role: string | null = null; // To store the user's role

  // // Method to handle login (with username and password)
  // login(username: string, password: string): boolean {
  //   // Mock authentication logic, you can replace this with real backend API logic
  //   if (username === 'company' && password === 'companyPass') {
  //     this.isAuthenticated = true;
  //     this.role = 'company';
  //   } else if (username === 'candidate' && password === 'candidatePass') {
  //     this.isAuthenticated = true;
  //     this.role = 'candidate';
  //   } else if (username === 'company-hr' && password === 'hrPass') {
  //     this.isAuthenticated = true;
  //     this.role = 'company-hr';
  //   } else if (username === 'police' && password === 'policePass') {
  //     this.isAuthenticated = true;
  //     this.role = 'police';
  //   } else if (username === 'institute' && password === 'institutePass') {
  //     this.isAuthenticated = true;
  //     this.role = 'institute';
  //   } else {
  //     this.isAuthenticated = false;
  //     this.role = null;
  //     return false;
  //   }
  //   return true;
  // }

  // // Check if the user is logged in
  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  // }

  // // Get the user's role
  // getRole(): string | null {
  //   return this.role;
  // }

  // // Logout method
  // logout(): void {
  //   this.isAuthenticated = false;
  //   this.role = null;
  // }
  
  // private apiUrlSignupCan = 'http://localhost:5000/api/candidate/signup';
  // private apiUrlSignupCom = 'http://localhost:5000/api/company/signup';
  // private apiUrlLogin = 'http://localhost:5000/api/hr/login';
  // private tokenKey = 'authToken';

  // constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  // // Signup method for candidate
  // signupCandidate(candidateData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrlSignupCan}`, candidateData);
  // }

  // // Signup method for company
  // signupCompany(companyData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrlSignupCom}`, companyData);
  // }

  // // Login method
  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrlLogin}`, { username, password }).pipe(
  //     tap((response: any) => {
  //       if (response && response.token) {
  //         localStorage.setItem(this.tokenKey, response.token);
  //       }
  //     })
  //   );
  // }

  // // Check if user is authenticated based on token presence
  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem(this.tokenKey);
  //   return token !== null && !this.jwtHelper.isTokenExpired(token);
  // }

  // // Get stored token
  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }

  // // Decode and get role from token
  // getRoleFromToken(): string | null {
  //   const token = this.getToken();
  //   if (token) {
  //     const decodedToken = this.jwtHelper.decodeToken(token);
  //     return decodedToken?.role || null;
  //   }
  //   return null;
  // }

  // // Log out user
  // logout(): void {
  //   localStorage.removeItem(this.tokenKey);
  // }


  private apiUrlSignupCan = 'http://localhost:5000/api/candidate/signup';
  private apiUrlSignupCom = 'http://localhost:5000/api/company/signup';
  private apiUrlLogin = 'http://localhost:5000/api/auth/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  // Candidate signup
  signupCandidate(candidateData: any): Observable<any> {
    return this.http.post(`${this.apiUrlSignupCan}`, candidateData);
  }

  // Company signup
  signupCompany(companyData: any): Observable<any> {
    return this.http.post(`${this.apiUrlSignupCom}`, companyData);
  }

  login(loginData: { username: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrlLogin, loginData);
  }


  // Save token to localStorage
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove token from localStorage (logout)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Get the role from the JWT token
  getRoleFromToken(token: string): string | null {
    const decodedToken = this.decodeToken(token);
    return decodedToken ? decodedToken.role : null;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const decodedToken = this.decodeToken(token);
    const isTokenExpired = this.checkTokenExpiration(decodedToken?.exp);
    return !isTokenExpired;
  }

  // Decode JWT token manually
  private decodeToken(token: string): any | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Invalid token format', e);
      return null;
    }
  }

  // Check token expiration
  private checkTokenExpiration(expiration: number | undefined): boolean {
    if (!expiration) return true;
    const expirationDate = new Date(expiration * 1000);
    return expirationDate < new Date();
  }









  // private apiUrl = 'http://localhost:3000/api/signup'; // Adjust this to your actual API base URL

  // constructor(private http: HttpClient) {}

  // // Candidate Signup Method
  // signupCandidate(name: string, username: string, password: string, pan: string): Observable<any> {
  //   const body = {
  //     name,
  //     username,
  //     password,
  //     pan,
  //     type: 'candidate' // Indicate the type if needed in your backend
  //   };
  //   return this.http.post(`${this.apiUrl}/candidate`, body);
  // }

  // // Company Signup Method
  // signupCompany(companyName: string, address: string, username: string, password: string): Observable<any> {
  //   const body = {
  //     companyName,
  //     address,
  //     username,
  //     password,
  //     type: 'company' // Indicate the type if needed in your backend
  //   };
  //   return this.http.post(`${this.apiUrl}/company`, body);
  // }



}
