import { Component } from '@angular/core';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss']
})
export class MyOffersComponent {
  rowData = [
    { sNo: 1, company: 'Company A', position: 'Software Engineer', ctc: '$100,000', offerLetter: 'offerA.pdf', status: 'Accepted', statusClass: 'accepted', showDropdown: true },
    { sNo: 2, company: 'Company B', position: 'Product Manager', ctc: '$120,000', offerLetter: 'offerB.pdf', status: 'Accepted', statusClass: 'accepted', showDropdown: true },
    { sNo: 3, company: 'Company C', position: 'Data Scientist', ctc: '$110,000', offerLetter: 'offerC.pdf', status: 'Accepted', statusClass: 'accepted', showDropdown: true },
    { sNo: 4, company: 'Company D', position: 'UX Designer', ctc: '$90,000', offerLetter: 'offerD.pdf', status: 'Accepted', statusClass: 'accepted', showDropdown: true },
    { sNo: 5, company: 'Company E', position: 'DevOps Engineer', ctc: '$105,000', offerLetter: 'offerE.pdf', status: 'Accepted', statusClass: 'accepted', showDropdown: true },
];

isModalOpen = false;
selectedRow: any;



closeModal() {
    this.isModalOpen = false;
}

openModal(row: any) {
  this.selectedRow = row;
  this.selectedRow.confirmationMessage = row.status === 'Accepted' 
      ? `Are you sure you want to accept the offer from ${row.company}? If you accept, the remaining offers will be declined.` 
      : `Are you sure you want to decline the offer from ${row.company}?`;
  this.isModalOpen = true;
}

confirmStatusChange() {
  if (this.selectedRow.status === 'Accepted') {
      // Accept this row and decline others
      this.rowData.forEach(row => {
          if (row !== this.selectedRow) {
              row.status = 'Declined';
              row.showDropdown = false; // Hide dropdown for declined offers
          } else {
              row.status = 'Accepted'; // Confirm accepted status
              row.showDropdown = false; // Hide dropdown for accepted offer
          }
      });
  } else if (this.selectedRow.status === 'Declined') {
      // Just hide dropdown for declined offer
      this.selectedRow.showDropdown = false; // Hide dropdown for declined offer
  }
  this.closeModal();
}

}
