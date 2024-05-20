import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  travelData:any;
  
  constructor(private http: HttpClient) {}
  ngOnInit() {

    this.http.get('http://localhost:3000/travels').subscribe(res => {
      this.travelData = res;
    });
      
  }
}
