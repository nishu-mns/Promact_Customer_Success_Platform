import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectAddModalComponent } from '../../project-add-modal/project-add-modal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit  {
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openProjectModal() {
    const modalRef = this.modalService.open(ProjectAddModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
  activeLink = '';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  // newProject():void{
    
  // }
}
