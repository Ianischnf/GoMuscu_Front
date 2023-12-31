// muscle.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MuscleService {
  private apiUrl = "http://127.0.0.1:8000/muscle/";

  constructor(private http: HttpClient) {}

  // Opération CREATE (Création d'un utilisateur)
  createMuscle(muscle: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, muscle, { headers: headers });
  }

  // Opération READ (Lecture des utilisateurs)
  getMuscle() {
    return this.http.get(this.apiUrl);
  }

  // Opération UPDATE (Mise à jour d'un utilisateur)
  updateMuscle(muscleId: number, muscle: any) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.put(url, muscle);
  }

  // Opération DELETE (Suppression d'un utilisateur)
  deleteMuscle(muscleId: number) {
    const url = `${this.apiUrl}${muscleId}/`;
    return this.http.delete(url);
  }
}
