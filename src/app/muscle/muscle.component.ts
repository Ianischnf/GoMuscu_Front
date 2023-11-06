import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-muscle',
  templateUrl: './muscle.component.html',
  styleUrls: ['./muscle.component.css'],
})
export class MuscleComponent {
  muscles: any[] = [];  // Créez une propriété pour stocker les données

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:8000/muscle').subscribe((data: any) => {
      this.muscles = data.results;  // Stockez les données dans la propriété muscles
    });
  }
}