import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.css'
})
export class EditReservationComponent {

  travelData:any;
  reservationData:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/reservations').subscribe(res => {
      this.reservationData = res;
    });

    this.http.get('http://localhost:3000/travels').subscribe(res => {
      this.travelData = res;
    });
      
  }

}
