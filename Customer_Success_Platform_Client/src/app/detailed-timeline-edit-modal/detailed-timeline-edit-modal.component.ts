import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailedTimelineService } from '../Service/detailed-timeline.service';
import { DetailedTimeline } from '../Models/DetailedTimeline';

@Component({
  selector: 'app-detailed-timeline-edit-modal',
  templateUrl: './detailed-timeline-edit-modal.component.html',
  styleUrls: ['./detailed-timeline-edit-modal.component.css']
})
export class DetailedTimelineEditModalComponent {
  @Input() detailedTimeline: any;

  @Output() saveChangesEvent = new EventEmitter<DetailedTimeline>();

  constructor(private detailedTimelineService: DetailedTimelineService, public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.detailedTimelineService.updateDetailedTimeline(this.detailedTimeline)
      .subscribe(updatedTimeline => {
        console.log('Detailed timeline updated successfully:', updatedTimeline);
        this.saveChangesEvent.emit(updatedTimeline); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating detailed timeline:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
