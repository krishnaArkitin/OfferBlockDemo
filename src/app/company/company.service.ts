import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:5000/api/offer'; // Backend API URL (replace with your backend URL)

  constructor(private http: HttpClient) {}

  // Fetch candidate details by OfferBlock ID
  getCandidateByOfferBlockId(offerBlockId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidate/${offerBlockId}`, {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') || '', // Include the JWT token for authentication
      }),
    });
  }

  // Create a new offer
  createOffer(offerData: any, offerPdf: File): Observable<any> {
    const formData = new FormData();
    formData.append('candidateId', offerData.candidateId);
    formData.append('position', offerData.position);
    formData.append('ctc', offerData.ctc);
    formData.append('deadline', offerData.deadline);
    formData.append('jobLocation', offerData.jobLocation);
    formData.append('offerPdf', offerPdf, offerPdf.name);

    return this.http.post(`${this.apiUrl}/create`, formData, {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') || '', // Include the JWT token for authentication
      }),
    });
  }

  // Fetch all offers for a candidate
  getOffersForCandidate(candidateId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidate-offers/${candidateId}`, {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') || '', // Include the JWT token for authentication
      }),
    });
  }


}
