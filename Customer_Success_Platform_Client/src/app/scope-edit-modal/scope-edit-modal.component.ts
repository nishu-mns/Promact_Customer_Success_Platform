import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Scope } from '../Models/Scope';
import { ScopeService } from '../Service/scope.service';

@Component({
  selector: 'app-scope-edit-modal',
  templateUrl: './scope-edit-modal.component.html',
  styleUrls: ['./scope-edit-modal.component.css']
})
export class ScopeEditModalComponent {
  @Input() scope: any;

  @Output() saveChangesEvent = new EventEmitter<Scope>();

  constructor(private scopeService: ScopeService, public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.scopeService.updateScope(this.scope)
      .subscribe(updatedScope => {
        console.log('Scope updated successfully:', updatedScope);
        this.saveChangesEvent.emit(updatedScope); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating scope:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
