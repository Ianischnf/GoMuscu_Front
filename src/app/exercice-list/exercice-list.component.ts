import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciceService } from '../services/exercices.service';

interface Exercice {
  id: number;
  name: String;
  desc: String;
  idMuscle: String;
}


@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css'],
})
export class ExerciceListComponent implements OnInit {
  exercises: Exercice[] = [];

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const muscleId = params['id'];

      // Call your service to get exercises
      this.exerciseService.getExercisesByMuscleId(muscleId).subscribe((data: any) => {
        // Assuming data contains the list of exercises
        this.exercises = data.results;

        // Filter the exercises that match the muscleId from the URL
        this.exercises = this.exercises.filter((exercise) => exercise.idMuscle == `http://127.0.0.1:8000/muscle/${muscleId}/`);

        console.log(this.exercises, `http://127.0.0.1:8000/muscle/${muscleId}/`);
        
      });
    });
  }
}  