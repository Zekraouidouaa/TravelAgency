import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-testimonilas',
  templateUrl: './edit-testimonilas.component.html',
  styleUrl: './edit-testimonilas.component.css'
})
export class EditTestimonilasComponent {
  
  testimonialsForm!: FormGroup;
  constructor(private http: HttpClient, private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.testimonialsForm = this.formbuilder.group({
      quote: ['', Validators.required],
      name: ['', Validators.required],
      stars: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  addTestimonials(data: any) {
console.log(data);
    this.http
      .post('http://localhost:3000/testimonials', JSON.stringify(data.getRawValue()))
      .subscribe((res) => {
        console.log("successfully");
      });
  }
}
