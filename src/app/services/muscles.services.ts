// muscles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MuscleService {
  private apiUrl = 'http://127.0.0.1:8000/muscle/';

  constructor(private http: HttpClient) {}

  // Opération CREATE (Création d'un muscle)
  createMuscle(muscle: any) {
    return this.http.post(this.apiUrl, muscle);
  }

  // Opération READ (Lecture des muscle)
  getMuscle() {
    return this.http.get(this.apiUrl);
  }

  // Opération UPDATE (Mise à jour d'un muscle)
  updateMuscle(muscleId: number, user: any) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.put(url, user);
  }

  // Opération DELETE (Suppression d'un muscle)
  deleteMuscle(muscleId: number) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.delete(url);
  }
}
