import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTimelineEditModalComponent } from './detailed-timeline-edit-modal.component';

describe('DetailedTimelineEditModalComponent', () => {
  let component: DetailedTimelineEditModalComponent;
  let fixture: ComponentFixture<DetailedTimelineEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedTimelineEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedTimelineEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
