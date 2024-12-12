import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent {
  
  @Input() offerBlockId: string | undefined; // Declare the input property

  ngOnInit() {
    // You can use the offerBlockId here to fetch candidate details
    console.log('Received offerBlockId:', this.offerBlockId);
  }
}
