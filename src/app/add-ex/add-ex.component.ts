import { Component } from '@angular/core';
import { ExerciceService } from '../services/exercices.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
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

  createExercice(){

  }
  // Vérifiez si muscleName est vide
  
  createMuscle() {
    if (!this.muscleName) {
        console.error('Le nom du muscle ne peut pas être vide.');
        return;
    }

    const muscleData = {
        muscleName: this.muscleName as string,
    };

    console.log('MuscleData avant envoi:', muscleData);

    this.muscleService.createMuscle(muscleData).subscribe(
        (response: any) => {
            this.muscleName = '';  // Réinitialisez la variable si nécessaire
            console.log('Muscle créé avec succès:', response);
        },
        (error: any) => {
            console.error('Erreur lors de la création du muscle :', error);
            if (error.error) {
                console.error('Détails de l\'erreur :', error.error);
            }
        }
    );
}




  


}
