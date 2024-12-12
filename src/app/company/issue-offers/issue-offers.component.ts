import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-offers',
  templateUrl: './issue-offers.component.html',
  styleUrls: ['./issue-offers.component.scss']
})
export class IssueOffersComponent {


  offerForm: FormGroup;
  candidateDetails: any;
  offerPdf: File | null = null;

  constructor(
    private fb: FormBuilder,
    private offerService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.offerForm = this.fb.group({
      offerBlockId: ['', Validators.required],
      candidateId: ['', Validators.required],
      candidateName: ['', Validators.required],
      position: ['', Validators.required],
      ctc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      deadline: ['', Validators.required],
      jobLocation: ['', Validators.required],
      offerPdf: [null, Validators.required]
    });
  }

  // Fetch candidate details by OfferBlock ID
  fetchCandidateDetails() {
    const offerBlockId = this.offerForm.get('offerBlockId')?.value;
    if (offerBlockId) {
      this.offerService.getCandidateByOfferBlockId(offerBlockId).subscribe(
        (data) => {
          this.candidateDetails = data;
          this.offerForm.patchValue({
            candidateId: data._id, // Automatically fill the candidate's ID
            candidateName: data.name // Automatically fill the candidate's name
          });
        },
        (error) => {
          console.error('Error fetching candidate details', error);
        }
      );
    }
  }

  // Handle file input for the PDF
  onFileChange(event: any) {
    this.offerPdf = event.target.files[0];
  }

  // Submit the form to create an offer
  onSubmit() {
    if (this.offerForm.invalid || !this.offerPdf) {
      return;
    }

    const offerData = this.offerForm.value;
    this.offerService.createOffer(offerData, this.offerPdf).subscribe(
      (response) => {
        console.log('Offer created successfully:', response);
        this.router.navigate(['/offers']); // Navigate to the offers page after success
      },
      (error) => {
        console.error('Error creating offer:', error);
      }
    );
  }

}
