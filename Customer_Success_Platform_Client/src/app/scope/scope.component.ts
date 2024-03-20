import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Scope } from '../Models/Scope';
import { ScopeService } from '../Service/scope.service';
import { ScopeEditModalComponent } from '../scope-edit-modal/scope-edit-modal.component'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit {
  projectId!: string;

  constructor(private scopeService: ScopeService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }

  scopes: Scope[] = [];
  newScope: Scope = {
    id: '',
    projectId: this.projectId,
    technology: '',
    scopeDetails: ''
  };
  isNewScope: boolean = false;

  ngOnInit(): void {
    this.getScopes();
  }

  getScopes(): void {
    this.scopeService.getScopes()
      .subscribe(scopes => this.scopes = scopes.items.filter((entry: Scope) => entry.projectId === this.projectId));
  }

  addNewScope(): void {
    this.isNewScope = true;
  }

  saveNewScope(): void {
    this.scopeService.createScope({...this.newScope, projectId: this.projectId})
      .subscribe(createdScope => {
        this.scopes.push(createdScope);
        this.isNewScope = false;
        this.newScope = {
          id: '',
          projectId: this.projectId,
          technology: '',
          scopeDetails: ''
        };
      }, error => {
        console.error('Error creating new scope:', error);
      });
  }

  saveChanges(): void {
    // Implement saving changes logic here
  }

  deleteScope(scope: Scope): void {
    if (confirm('Are you sure you want to delete this scope?')) {
      this.scopeService.deleteScope(scope.id)
        .subscribe(() => {
          this.scopes = this.scopes.filter(s => s.id !== scope.id);
        }, error => {
          console.error('Error deleting scope:', error);
        });
    }
  }

  openEditModal(scope: Scope) {
    const modalRef = this.modalService.open(ScopeEditModalComponent, { centered: true });
    modalRef.componentInstance.scope = { ...scope }; // Pass the scope data to the modal component
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedScope: Scope) => {
      const index = this.scopes.findIndex(s => s.id === updatedScope.id);
      if (index !== -1) {
        this.scopes[index] = updatedScope; // Update the scope in the array with the updated data
      }
    });
  }
}
