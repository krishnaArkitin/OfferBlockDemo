import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  // const authService = inject(AuthService);
  // const router = inject(Router);

  // // Get the expected role from route data
  // const expectedRole = route.data['role'];
  
  // // Get the current user role from AuthService
  // const currentRole = authService.getRole();

  // // Check if the user is logged in and their role matches the expected role
  // if (authService.isLoggedIn() && currentRole === expectedRole) {
  //   return true;
  // } else {
  //   // If not, redirect to the login page
  //   router.navigate(['/login']);
  //   return false;
  // }
  
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  const token = authService.getToken();

  if (token) {
    const decodedToken = decodeToken(token);
    const userRole = decodedToken?.role;
    const isTokenExpired = checkTokenExpiration(decodedToken?.exp);

    if (userRole === expectedRole && !isTokenExpired) {
      return true;
    }
  }

  // Redirect to login page if not authorized
  router.navigate(['/login']);
  return false;
};

// Helper function to decode JWT token
function decodeToken(token: string): any | null {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    console.error('Invalid token format', e);
    return null;
  }
}

// Helper function to check token expiration
function checkTokenExpiration(expiration: number | undefined): boolean {
  if (!expiration) return true; // If expiration is not present, treat as expired
  const expirationDate = new Date(expiration * 1000); // Convert to milliseconds
  return expirationDate < new Date();

};
