// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExerciceService {

  private apiUrl = 'http://127.0.0.1:8000/exercice/';

  constructor(private http: HttpClient) { }

  // Opération CREATE (Création d'un exercice)
  createExercice(muscle: any) {
    return this.http.post(this.apiUrl, muscle);
  }

  // Opération READ (Lecture des exercice)
  getExercice() {
    return this.http.get(this.apiUrl);
  }

  // Opération UPDATE (Mise à jour d'un exercice)
  updateExercice(muscleId: number, user: any) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.put(url, user);
  }

  // Opération DELETE (Suppression d'un exercice)
  deleteExercice(muscleId: number) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.delete(url);
  }

  getExercisesByMuscleId(muscleId: number) {
    const url = `${this.apiUrl}`;
    // console.log(url, muscleId);
    
    return this.http.get(url);
  }

}
