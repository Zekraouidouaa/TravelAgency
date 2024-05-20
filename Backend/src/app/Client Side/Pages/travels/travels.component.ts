import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css'
})
export class TravelsComponent {

  travelData:any;
  
  constructor(private http: HttpClient) {}
  ngOnInit() {

    this.http.get('http://localhost:3000/travels').subscribe(res => {
      this.travelData = res;
    });
      
  }
}
