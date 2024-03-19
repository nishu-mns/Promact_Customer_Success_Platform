import { Component, OnInit } from '@angular/core';
import { DetailedTimeline } from '../Models/DetailedTimeline';
import { DetailedTimelineService } from '../Service/detailed-timeline.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DetailedTimelineEditModalComponent } from '../detailed-timeline-edit-modal/detailed-timeline-edit-modal.component';

@Component({
  selector: 'app-detailed-timeline',
  templateUrl: './detailed-timeline.component.html',
  styleUrls: ['./detailed-timeline.component.css']
})
export class DetailedTimelineComponent implements OnInit {
  projectId!: string;
  constructor(private detailedTimelineService: DetailedTimelineService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);
    })
  }

  detailedTimelines: DetailedTimeline[] = [];
  newTimeline: DetailedTimeline = {
    id: '',
    projectId: this.projectId,
    link: ''
  };
  isNewTimeline: boolean = false;

  ngOnInit(): void {
    this.getDetailedTimelines();
  }

  getDetailedTimelines(): void {
    this.detailedTimelineService.getDetailedTimelines()
      .subscribe(timelines => this.detailedTimelines = timelines.items.filter((entry: DetailedTimeline) => entry.projectId === this.projectId));
  }

  addNewTimeline(): void {
    this.isNewTimeline = true;
  }

  saveNewTimeline(): void {
    this.detailedTimelineService.createDetailedTimeline({...this.newTimeline, projectId: this.projectId})
      .subscribe(createdTimeline => {
        this.detailedTimelines.push(createdTimeline);
        this.isNewTimeline = false;
        this.newTimeline = {
          id: '',
          projectId: this.projectId,
          link: ''
        };
      }, error => {
        console.error('Error creating new detailed timeline:', error);
      });
  }

  saveChanges(): void {
    // Implement saveChanges method if needed
  }

  deleteTimeline(timeline: DetailedTimeline): void {
    if (confirm('Are you sure you want to delete this timeline?')) {
      this.detailedTimelineService.deleteDetailedTimeline(timeline.id)
        .subscribe(() => {
          this.detailedTimelines = this.detailedTimelines.filter(t => t.id !== timeline.id);
        }, error => {
          console.error('Error deleting detailed timeline:', error);
        });
    }
  }

  openEditModal(timeline: DetailedTimeline) {
    const modalRef = this.modalService.open(DetailedTimelineEditModalComponent, { centered: true });
    modalRef.componentInstance.detailedTimeline = { ...timeline };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedTimeline: DetailedTimeline) => {
      const index = this.detailedTimelines.findIndex(t => t.id === updatedTimeline.id);
      if (index !== -1) {
        this.detailedTimelines[index] = updatedTimeline;
      }
    });
  }
}
