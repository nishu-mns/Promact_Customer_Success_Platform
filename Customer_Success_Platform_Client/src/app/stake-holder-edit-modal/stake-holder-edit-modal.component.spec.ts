import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeHolderEditModalComponent } from './stake-holder-edit-modal.component';

describe('StakeHolderEditModalComponent', () => {
  let component: StakeHolderEditModalComponent;
  let fixture: ComponentFixture<StakeHolderEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StakeHolderEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeHolderEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
