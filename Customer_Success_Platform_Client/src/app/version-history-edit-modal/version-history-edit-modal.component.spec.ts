import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionHistoryEditModalComponent } from './version-history-edit-modal.component';

describe('VersionHistoryEditModalComponent', () => {
  let component: VersionHistoryEditModalComponent;
  let fixture: ComponentFixture<VersionHistoryEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionHistoryEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersionHistoryEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
