import { Component } from '@angular/core';
import { ExerciceService } from '../services/exercices.service';
import { HttpHeaders } from '@angular/common/http';
import { MuscleService } from '../services/muscles.services';

@Component({
  selector: 'app-add-ex',
  templateUrl: './add-ex.component.html',
  styleUrls: ['./add-ex.component.css']
})
export class AddExComponent {


  selectedFrom: string = '';
  muscleName: string = '';
  exerciseName: string = '';

  newExercice = {
    name: '',
    muscle: '',
    description: '',
  };



  constructor(
    private exerciceService: ExerciceService, // Injectez le service d'exercices
    private muscleService: MuscleService // Injectez le service de muscles
  ) {}


  createExercice() {
    // Récupérer le token JWT depuis l'endroit où il est stocké (localStorage, sessionStorage, etc.)
    const token = localStorage.getItem('token'); // Assurez-vous de stocker le token de manière sécurisée
  
    if (token) {
      // Créer un en-tête avec le token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      // Inclure les en-têtes dans la requête
      this.exerciceService.createExercice({ ...this.newExercice, headers }).subscribe(
        (response: any) => {
          // Mettez à jour la liste des exercices ou effectuez d'autres actions
          // Réinitialisez le formulaire si nécessaire
          this.newExercice = { name: '', muscle: '', description: '' };
        },
        (error: any) => {
          console.error('Erreur lors de la création de l\'exercice :', error);
        }
      );
    } else {
      console.error('Token JWT non trouvé. Assurez-vous que l\'utilisateur est authentifié.');
    }
  }
  
  createMuscle() {
    // Récupérez le nom du muscle depuis la variable (ou formulaire)
    const muscleData = {
      name: this.muscleName,
    };

    // Appelez le service de muscles pour créer le muscle
    this.muscleService.createMuscle(muscleData).subscribe(
      (error: any) => {
        console.error('Erreur lors de la création du muscle :', error);
      }
    );
  }
}
