import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeEditModalComponent } from './scope-edit-modal.component';

describe('ScopeEditModalComponent', () => {
  let component: ScopeEditModalComponent;
  let fixture: ComponentFixture<ScopeEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopeEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopeEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
