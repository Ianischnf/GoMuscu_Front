
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExerciceService {

  private apiUrl = 'http://127.0.0.1:8000/exercice/';

  constructor(private http: HttpClient) { }

  // Opération CREATE (Création d'un exercice)
  createExercice(exercice: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, exercice, {headers: headers});
  }

  // Opération READ (Lecture des exercice)
  getExercice() {
    return this.http.get(this.apiUrl);
  }

  // Opération UPDATE (Mise à jour d'un exercice)
  updateExercice(exerciceId: number, user: any) {
    const url = `${this.apiUrl}${exerciceId}/`;
    return this.http.put(url, user);
  }

  // Opération DELETE (Suppression d'un exercice)
  deleteExercice(exerciceId: number) {
    const url = `${this.apiUrl}${exerciceId}/`;
    return this.http.delete(url);
  }

  getExercisesByMuscleId(exerciceId: number) {
    const url = `${this.apiUrl}?exerciceId=${exerciceId}`;
    console.log(exerciceId);
    
    return this.http.get(url);
  }

}
