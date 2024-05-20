import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonials: any;

  numberOfRounds: Number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/testimonials').subscribe((res) => {
      this.testimonials = res;
      console.log(res);
      //console.log('successfully');
    });
  }

  ngAfterViewInit(): void {
    this.numberOfRounds = Math.ceil(this.testimonials.length / 3.0);
  }
}
