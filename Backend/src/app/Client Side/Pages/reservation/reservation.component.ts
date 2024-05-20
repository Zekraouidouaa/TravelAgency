import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  reservationForm!: FormGroup;
  constructor(private http: HttpClient, private formbuilder: FormBuilder) {}

  travelData: any;

  ngOnInit() {
    this.reservationForm = this.formbuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      members: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.http.get('http://localhost:3000/travels').subscribe((res) => {
      this.travelData = res;
      // console.log(res);
      //console.log('successfully');
    });
  }

  addReservation(data: any) {
    // console.log(data);
    let obj = this.travelData;
    let prix = 0;
    let location = "";
    Object.keys(obj).forEach((key) => {
      if (obj[key].id == data.getRawValue().location) {
        prix = obj[key].price;
        location = obj[key].location;
      }
    });

    obj = data.getRawValue();
    obj.price = prix * obj.members;
    obj.location = location;
    console.log(prix * obj.members)
    console.log(location)
    this.http
      .post(
        'http://localhost:3000/reservations',
        JSON.stringify(obj)
      )
      .subscribe((res) => {
        console.log('successfully');
      });
  }
}
