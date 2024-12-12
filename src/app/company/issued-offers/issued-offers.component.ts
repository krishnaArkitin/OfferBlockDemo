import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-issued-offers',
  templateUrl: './issued-offers.component.html',
  styleUrls: ['./issued-offers.component.scss']
})
export class IssuedOffersComponent {

  // constructor(private router: Router) {}

  // // Column definitions
  // columnDefs: ColDef[] = [
  //   { 
  //     headerName: 'Candidate Name', 
  //     field: 'name', 
  //     flex: 2,
  //     filter: true,
  //     cellRenderer: (params: any) => {
  //       const imageUrl = params.data.imageUrl; // Assuming `imageUrl` is part of rowData
  //       return `
  //         <div class="candidate-cell">
  //           <img src="${imageUrl}" alt="Candidate Image" class="candidate-image"/>
  //           <span class="candidate-name">${params.value}</span>
  //         </div>
  //       `;
  //     },
  //     onCellClicked: (params: any) => {
  //       // Use the router to navigate instead of window.location.href
  //        this.router.navigate(['/company/candidateProfile', params.data.offerBlockId]);
  //     }
  //   },
  //   { headerName: 'Offer Block ID', field: 'offerBlockId', flex: 1, filter: true },
  //   { headerName: 'Position', field: 'position', flex: 1, filter: true },
  //   { headerName: 'Issued On', field: 'issuedOn', flex: 1, filter: true },
  //   { headerName: 'Deadline', field: 'deadline', flex: 1, filter: true },
  //   { 
  //     headerName: 'Offer Status', 
  //     field: 'offerStatus',
  //     cellRenderer: (params: any) => {
  //       const status = params.value;
  //       let statusClass = '';
  //       switch (status) {
  //         case 'pending':
  //           statusClass = 'status-pending';
  //           break;
  //         case 'accepted':
  //           statusClass = 'status-accepted';
  //           break;
  //         case 'declined':
  //           statusClass = 'status-declined';
  //           break;
  //         default:
  //           statusClass = 'status-unknown';
  //       }
  //       return `<span class="${statusClass}">${status}</span>`;
  //     },
  //     flex: 1,
  //     filter: true,
  //   },
  //   { 
  //     headerName: 'Verification Status', 
  //     field: 'verificationStatus',
  //     cellRenderer: (params: any) => {
  //       return params.value === 'completed' ? '✔️ Completed' : '❌ Incomplete';
  //     },
  //     flex: 1,
  //   }
  // ];

  // // Row data with added image URL
  // rowData = [
  //   { 
  //     name: 'John Doe', 
  //     offerBlockId: '12345', 
  //     position: 'Software Engineer', 
  //     issuedOn: '2023-10-01', 
  //     deadline: '2023-10-15', 
  //     offerStatus: 'pending', 
  //     verificationStatus: 'incomplete',
  //     imageUrl: '../../../assets/image/png-clipart-computer-icons.png' // Add image URL
  //   },
  //   {
  //     name: 'Jane Smith', 
  //     offerBlockId: '54321', 
  //     position: 'Project Manager', 
  //     issuedOn: '2023-09-25', 
  //     deadline: '2023-10-05', 
  //     offerStatus: 'accepted', 
  //     verificationStatus: 'completed',
  //     imageUrl: '../../../assets/image/png-clipart-computer-icons.png' // Add image URL
  //   }
  // ];

  // // Grid options
  // gridOptions: GridOptions = {
  //   rowHeight: 60,
  //   paginationPageSize: 10,
  //   defaultColDef: {
  //     resizable: true,
  //     sortable: true,
  //     filter: true,
  //     floatingFilter: true,
  //     flex: 1
  //   },
  //   animateRows: true,
    
  // };


  showCandidateProfile: boolean = false;
  selectedCandidate: any = null;
  isMobileView: boolean = window.innerWidth <= 768;

  verificationSteps: any[] = [];

  constructor(private router: Router) {}

  // Detect screen resize to adjust the layout based on window width
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileView = event.target.innerWidth <= 768;
  }

  // Table column definitions
  columnDefs: ColDef[] = [
    { 
      headerName: 'Candidate Name', 
      field: 'name', 
      flex: 2,
      filter: true,
      cellRenderer: (params: any) => {
        const imageUrl = params.data.imageUrl; 
        return `
          <div class="candidate-cell">
            <img src="${imageUrl}" alt="Candidate Image" class="candidate-image"/>
            <span class="candidate-name">${params.value}</span>
          </div>
        `;
      },
      onCellClicked: (params: any) => {
        this.showCandidateDetails(params.data);
      }
    },
    { headerName: 'Offer Block ID', field: 'offerBlockId', flex: 1, filter: true },
    { headerName: 'Position', field: 'position', flex: 1, filter: true },
    { headerName: 'Issued On', field: 'issuedOn', flex: 1, filter: true },
    { headerName: 'Deadline', field: 'deadline', flex: 1, filter: true },
    { 
      headerName: 'Offer Status', 
      field: 'offerStatus',
      cellRenderer: (params: any) => {
        const status = params.value;
        let statusClass = '';
        switch (status) {
          case 'Pending':
            statusClass = 'status-Pending';
            break;
          case 'Accepted':
            statusClass = 'status-Accepted';
            break;
          case 'Declined':
            statusClass = 'status-Declined';
            break;
          default:
            statusClass = 'status-Unknown';
        }
        return `<span class="${statusClass}">${status}</span>`;
      },
      flex: 1,
      filter: true,
    },
    { 
      headerName: 'Verification Status', 
      field: 'verificationStatus',
      cellRenderer: (params: any) => {
        return params.value === 'completed' ? '✔️ Completed' : '❌ Incomplete';
      },
      flex: 1,
    }
  ];

  rowData = [
    { 
      name: 'John Doe', 
      offerBlockId: '12345', 
      position: 'Software Engineer', 
      issuedOn: '2023-10-01', 
      deadline: '2023-10-15', 
      offerStatus: 'Pending', 
      verificationStatus: 'incomplete',
      imageUrl: '../../../assets/image/png-clipart-computer-icons.png',
      verificationSteps: [
        { name: 'Police Verification', status: 'completed' },
        { name: 'Institute Verification', status: 'in_progress' },
        { name: 'Previous Company Verification', status: 'pending' },
        { name: 'Aadhar Verification', status: 'completed' }
      ],
      socialLinks: [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
        { name: 'Twitter', url: 'https://twitter.com/johndoe' }
      ]
    },
    {
      name: 'Jane Smith', 
      offerBlockId: '54321', 
      position: 'Project Manager', 
      issuedOn: '2023-09-25', 
      deadline: '2023-10-05', 
      offerStatus: 'Accepted', 
      verificationStatus: 'completed',
      imageUrl: '../../../assets/image/png-clipart-computer-icons.png',
      verificationSteps: [
        { name: 'Police Verification', status: 'completed' },
        { name: 'Institute Verification', status: 'completed' },
        { name: 'Previous Company Verification', status: 'completed' },
        { name: 'Aadhar Verification', status: 'completed' }
      ],
      socialLinks: [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/janesmith' }
      ]
    }
  ];
  // Grid options
  gridOptions: GridOptions = {
    rowHeight: 60,
    paginationPageSize: 10,
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      flex: 1
    },
    animateRows: true,
  };

  // Show candidate details in the mobile view
  showCandidateDetails(candidate: any) {
    this.selectedCandidate = candidate;
    this.showCandidateProfile = true;
  }

  // Close candidate profile view
  closeProfile() {
    this.showCandidateProfile = false;
    this.selectedCandidate = null;
  }

  
}
