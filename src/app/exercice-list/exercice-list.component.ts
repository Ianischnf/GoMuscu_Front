import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciceService } from '../services/exercices.service';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css'],
})
export class ExerciceListComponent implements OnInit {
  exercises: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciceService
  ) {}

  ngOnInit(): void {
    // Retrieve the ID from the URL
    this.route.params.subscribe((params) => {
      const muscleId = params['id'];

      // Call your service to get exercises by muscleId
      this.exerciseService.getExercisesByMuscleId(muscleId).subscribe((data: any) => {
        console.log(this.exercises);
        
        this.exercises = data; // Assuming data contains the list of exercises
      });
    });
  }
}
