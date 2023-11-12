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
  
  idMuscle: string = "";
  selectedMuscle: any;
  muscles: any[] = [];
  exercices: any[] = [];


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
    const selectedMuscleId = event.target.value;
    this.idMuscle = selectedMuscleId.toString(); // Assurez-vous que l'ID du muscle est une chaîne
  }
  
  
  
  createExercice() {
    if (!this.name || !this.desc || !this.idMuscle) {
      console.error('Le nom de l\'exercice, la description ou le muscle ne peuvent pas être vides.');
      return;
    }
    
    const ExerciceData = {
      name: this.name,
      desc: this.desc,
      idMuscle: this.idMuscle // Assignation directe de l'ID
    };
  
    // Appel de l'API avec les données formatées
    this.exerciceService.createExercice(ExerciceData).subscribe(
      (response: any) => {
        console.log('Exercice créé avec succès :', response);
        this.name = '';
        this. desc = '';
        this.idMuscle= '';
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
