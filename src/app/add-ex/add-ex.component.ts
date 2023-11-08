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
    // Récupérer le token JWT depuis l'endroit où il est stocké (localStorage, sessionStorage, etc.)
    const token = localStorage.getItem('token'); // Assurez-vous de stocker le token de manière sécurisée
  
    if (token) {
      // Récupérer les données du formulaire pour le muscle (ajoutez ici la logique de récupération des données du formulaire)
      const muscleData = {
        name: 'Nom du muscle depuis le formulaire', // Remplacez par la valeur réelle du formulaire
      };
  
      // Créer un en-tête avec le token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      // Effectuer la requête HTTP avec l'en-tête d'authentification
      this.muscleService.createMuscle({ ...muscleData, headers }).subscribe(
        (response: any) => {
          // Mettez à jour la liste des muscles ou effectuez d'autres actions
          // Réinitialisez le formulaire si nécessaire
          // Exemple : this.newMuscle = { name: '' };
        },
        (error: any) => {
          console.error('Erreur lors de la création du muscle :', error);
        }
      );
    } else {
      console.error('Token JWT non trouvé. Assurez-vous que l\'utilisateur est authentifié.');
    }
  }
  
  


}
