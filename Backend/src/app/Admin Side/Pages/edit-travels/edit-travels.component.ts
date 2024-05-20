import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface travelModel {
  location: String;
  date: Date;
  periode: Number;
  price: Number;
  other: String;
  description: String;
  image: String;
}
@Component({
  selector: 'app-edit-travels',
  templateUrl: './edit-travels.component.html',
  styleUrl: './edit-travels.component.css',
})
export class EditTravelsComponent {

  travelForm!: FormGroup;
  constructor(private http: HttpClient, private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.travelForm = this.formbuilder.group({
      location: ['', Validators.required],
      date: ['', Validators.required],
      periode: ['', Validators.required],
      price: ['', Validators.required],
      other: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  addTravel(data: any) {
console.log(data);
    this.http
      .post('http://localhost:3000/travels', JSON.stringify(data.getRawValue()))
      .subscribe((res) => {
        console.log("successfully");
      });
  }
}
