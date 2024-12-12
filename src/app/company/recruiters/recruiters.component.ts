import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.scss']
})
export class RecruitersComponent {

  @ViewChild('createRecruiterModal') createRecruiterModal: ElementRef | undefined;

  selectedRecruiter: any = null;
  newRecruiter: any = { employeeName: '', offerBlockId: '', designation: '', offersIssued: 0, hirings: 0 };

  // Define ag-Grid columns
  columnDefs: ColDef[] = [
    { headerName: 'S.No', field: 'sNo', flex: 1 },
    { headerName: 'Employee Name', field: 'employeeName', flex: 2 },
    { headerName: 'Offer Block ID', field: 'offerBlockId', flex: 1 },
    { headerName: 'Designation', field: 'designation', flex: 1 },
    { headerName: 'Projects Assigned', field: 'projectsAssigned', flex: 1 },
    { headerName: 'Offers Issued', field: 'offersIssued', flex: 1 },
    { headerName: 'Hirings', field: 'hirings', flex: 1 }
  ];

  // Sample row data with recruiter and project details
  rowData = [
    { 
      sNo: 1, 
      employeeName: 'Alice Johnson', 
      offerBlockId: 'AB123', 
      designation: 'Senior Recruiter', 
      projectsAssigned: 2, 
      offersIssued: 15, 
      hirings: 10,
      assignedProjects: [
        { projectName: 'Project Alpha', offersIssued: 8, hirings: 5, extraDetails: 'In progress, Q3 2024 completion' },
        { projectName: 'Project Beta', offersIssued: 7, hirings: 5, extraDetails: 'Q1 2025 target' }
      ]
    },
    {
      sNo: 2, 
      employeeName: 'Bob Williams', 
      offerBlockId: 'CD456', 
      designation: 'Recruiter', 
      projectsAssigned: 1, 
      offersIssued: 5, 
      hirings: 3,
      assignedProjects: [
        { projectName: 'Project Gamma', offersIssued: 5, hirings: 3, extraDetails: 'Completion expected in Q4 2024' }
      ]
    }
  ];

  gridOptions: GridOptions = {
    rowHeight: 60,
    paginationPageSize: 10,
    animateRows: true,
  };

  constructor(private renderer: Renderer2) {}

  // Open the modal to create a new recruiter
  openCreateRecruiterModal() {
    if (this.createRecruiterModal) {
      this.renderer.addClass(this.createRecruiterModal.nativeElement, 'show');
      this.renderer.setStyle(this.createRecruiterModal.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.createRecruiterModal.nativeElement, 'backgroundColor', 'rgba(0, 0, 0, 0.5)');
    }
  }

  // Close the recruiter modal
  closeCreateRecruiterModal() {
    if (this.createRecruiterModal) {
      this.renderer.removeClass(this.createRecruiterModal.nativeElement, 'show');
      this.renderer.setStyle(this.createRecruiterModal.nativeElement, 'display', 'none');
    }
  }

  // Select a recruiter and show their details
  onRecruiterSelected(event: any) {
    this.selectedRecruiter = event.data;
  }

  // Close recruiter details view
  closeRecruiterDetails() {
    this.selectedRecruiter = null;
  }

  // Submit and save the new recruiter
  onSubmitCreateRecruiter() {
    const newRecruiterData = {
      sNo: this.rowData.length + 1,
      ...this.newRecruiter,
      projectsAssigned: 0,
      assignedProjects: [],
    };
    this.rowData = [...this.rowData, newRecruiterData];
    this.newRecruiter = { employeeName: '', offerBlockId: '', designation: '', offersIssued: 0, hirings: 0 };
    this.closeCreateRecruiterModal(); // Close modal after adding the new recruiter
  }


}
