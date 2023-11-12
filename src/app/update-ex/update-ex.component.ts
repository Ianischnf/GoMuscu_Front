import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../services/exercices.service';
import { MuscleService } from '../services/muscles.services';

@Component({
  selector: 'app-update-ex',
  templateUrl: './update-ex.component.html',
  styleUrls: ['./update-ex.component.css']
})
export class UpdateExComponent implements OnInit {

  muscles: any[] = [];
  exercices: any[] = [];

  constructor(private muscleService: MuscleService, private exerciceService: ExerciceService) {}

  ngOnInit(): void {
    this.loadMuscles();
    this.loadExercices();
  }

  loadMuscles() {
    this.muscleService.getMuscle().subscribe((data: any) => {
      this.muscles = data.results;
    });
  }

  loadExercices() {
    this.exerciceService.getExercice().subscribe((data: any) => {
      this.exercices = data.results;
    });
  }

  modifierExercice(exercice: any) {
    this.exerciceService.updateExercice(exercice.id, exercice).subscribe(
      (response: any) => {
        console.log('Exercice modifié avec succès :', response);
        this.loadExercices(); 
      },
      (error: any) => {
        console.error('Erreur lors de la modification de l\'exercice :', error);
      }
    );
  }
}
