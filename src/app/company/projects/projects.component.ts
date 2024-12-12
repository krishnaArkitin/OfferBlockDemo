import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  // selectedProject: any = null;

  // columnDefs = [
  //   { headerName: 'S.No', field: 'sNo', flex: 1 },
  //   { headerName: 'Project Name', field: 'projectName', flex: 1 },
  //   { headerName: 'Department', field: 'department', flex: 1 },
  //   { headerName: 'Recruiter Assigned', field: 'recruiterAssigned', flex: 1 },
  //   { headerName: 'Vacancies', field: 'vacancies', flex: 1 },
  //   { headerName: 'Offers', field: 'offers', flex: 1 },
  //   { headerName: 'Hirings', field: 'hirings', flex: 1 },
  //   { headerName: 'Status', field: 'status', flex: 1 }
  // ];

  // rowData = [
  //   { 
  //     sNo: 1, 
  //     projectName: 'Project Alpha', 
  //     department: 'Development', 
  //     recruiterAssigned: 'John Doe', 
  //     vacancies: 5, 
  //     offers: 3, 
  //     hirings: 2, 
  //     status: 'Active', 
  //     details: [
  //       { title: 'Overview', description: 'This is an overview of Project Alpha.' },
  //       { title: 'Timeline', description: 'Expected to complete by Q4 2024.' },
  //     ]
  //   },
  //   {
  //     sNo: 2, 
  //     projectName: 'Project Beta', 
  //     department: 'Marketing', 
  //     recruiterAssigned: 'Jane Smith', 
  //     vacancies: 3, 
  //     offers: 1, 
  //     hirings: 1, 
  //     status: 'On Hold', 
  //     details: [
  //       { title: 'Overview', description: 'This is an overview of Project Beta.' },
  //       { title: 'Timeline', description: 'Expected to complete by Q1 2025.' },
  //     ]
  //   }
  // ];

  // gridOptions: GridOptions = {
  //   rowHeight: 60,
  //   paginationPageSize: 10,
  //   animateRows: true,
  // };

  // onProjectSelected(event: any) {
  //   this.selectedProject = event.data;
  // }

  // closeProjectDetails() {
  //   this.selectedProject = null;
  // }




  @ViewChild('createProjectModal') createProjectModal!: ElementRef;
  
  selectedProject: any = null;
  newProject: any = { projectName: '', department: '', recruiterAssigned: '', vacancies: 0 };

  columnDefs = [
    { headerName: 'S.No', field: 'sNo', flex: 1 },
    { headerName: 'Project Name', field: 'projectName', flex: 2 },
    { headerName: 'Department', field: 'department', flex: 1 },
    { headerName: 'Recruiter Assigned', field: 'recruiterAssigned', flex: 1 },
    { headerName: 'Vacancies', field: 'vacancies', flex: 1 },
    { headerName: 'Offers', field: 'offers', flex: 1 },
    { headerName: 'Hirings', field: 'hirings', flex: 1 },
    { headerName: 'Status', field: 'status', flex: 1 }
  ];

  rowData = [
    { 
      sNo: 1, 
      projectName: 'Project Alpha', 
      department: 'Development', 
      recruiterAssigned: 'John Doe', 
      vacancies: 5, 
      offers: 3, 
      hirings: 2, 
      status: 'Active', 
      details: [
        { title: 'Overview', description: 'This is an overview of Project Alpha.' },
        { title: 'Timeline', description: 'Expected to complete by Q4 2024.' },
        { title: 'Budget', description: 'Allocated budget is $500,000.' },
        { title: 'Key Milestones', description: 'Initial design, Development, Testing, Final launch.' }
      ]
    },
    {
      sNo: 2, 
      projectName: 'Project Beta', 
      department: 'Marketing', 
      recruiterAssigned: 'Jane Smith', 
      vacancies: 3, 
      offers: 1, 
      hirings: 1, 
      status: 'On Hold', 
      details: [
        { title: 'Overview', description: 'This is an overview of Project Beta.' },
        { title: 'Timeline', description: 'Expected to complete by Q1 2025.' },
        { title: 'Budget', description: 'Allocated budget is $300,000.' },
        { title: 'Key Milestones', description: 'Market research, Strategy formulation, Campaign execution.' }
      ]
    }
  ];

  gridOptions: GridOptions = {
    rowHeight: 60,
    paginationPageSize: 10,
    animateRows: true,
  };

  constructor(private renderer: Renderer2) {}

  onProjectSelected(event: any) {
    this.selectedProject = event.data;
  }

  closeProjectDetails() {
    this.selectedProject = null;
  }

  openCreateProjectModal() {
    this.renderer.addClass(this.createProjectModal.nativeElement, 'show');
    this.renderer.setStyle(this.createProjectModal.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.createProjectModal.nativeElement, 'backgroundColor', 'rgba(0,0,0,0.5)');
  }

  closeCreateProjectModal() {
    this.renderer.removeClass(this.createProjectModal.nativeElement, 'show');
    this.renderer.setStyle(this.createProjectModal.nativeElement, 'display', 'none');
  }

  onSubmitCreateProject() {
    const newProjectData = {
      sNo: this.rowData.length + 1,
      ...this.newProject,
      offers: 0,
      hirings: 0,
      status: 'New',
    };
    this.rowData = [...this.rowData, newProjectData];
    this.newProject = { projectName: '', department: '', recruiterAssigned: '', vacancies: 0 };
    this.closeCreateProjectModal();
  }













}
