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
  name: string = '';
  desc : string = '';
  idMuscle: number = 0;
  selectedMuscle: any;
  muscles: any[] = [];
  exercices: any[] = [];

  // newExercice = {
  //   name: '',
  //   muscle: '',
  //   description: '',
  // };


 constructor(
    private exerciceService: ExerciceService, // Injectez le service d'exercices
    private muscleService: MuscleService, // Injectez le service de muscles
    private http: HttpClient
  ) {}

  
  ngOnInit(): void {
    this.http.get('http://localhost:8000/muscle').subscribe((data: any) => {
      this.muscles = data.results;
    });
    this.http.get('http://localhost:8000/exercice').subscribe((data: any) => {
      this.exercices = data.results;
    });
  }


  onSelectMuscle(event: any) {
    this.selectedMuscle = parseInt(event.target.value, 10);
}
  
  createExercice() {
    if (!this.name || !this.desc || !this.idMuscle ) {
      console.error('Le nom de l\'exercice ou l\'ID du muscle ne peuvent pas être vides.');
      return;
    }
  
    const exerciceData = {
      name: this.name as string,
      desc: this.desc as string,
      idMuscle: this.idMuscle
    };
  
    console.log('Exercice avant envoi :', exerciceData);
  
    this.exerciceService.createExercice(exerciceData).subscribe(
      (response: any) => {
        this.name = '';
        this.desc = '';
        this.idMuscle = 0;
        console.log('Exercice créé avec succès :', response);
      },
      (error: any) => {
        console.error('Erreur lors de la création de l\'exercice :', error);
        if (error.error) {
          console.error('Détails de l\'erreur :', error.error);
        }
      }
    );
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
