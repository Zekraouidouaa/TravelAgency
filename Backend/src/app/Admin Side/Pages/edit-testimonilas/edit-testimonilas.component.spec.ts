import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestimonilasComponent } from './edit-testimonilas.component';

describe('EditTestimonilasComponent', () => {
  let component: EditTestimonilasComponent;
  let fixture: ComponentFixture<EditTestimonilasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTestimonilasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTestimonilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
