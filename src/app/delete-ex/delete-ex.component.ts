import { Component } from '@angular/core';
import { ExerciceService } from '../services/exercices.service';
import { MuscleService } from '../services/muscles.services';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete-ex',
  templateUrl: './delete-ex.component.html',
  styleUrls: ['./delete-ex.component.css']
})
export class DeleteExComponent {
  exerciceId: number = 0; // Variable pour stocker l'identifiant de l'exercice à supprimer
  muscles: any[] = [];
  exercices: any[] = [];

  selectedFrom: string = '';
  muscleName: string = '';
  exerciseName: string = '';
  selectedMuscleId: any;
  constructor(private muscleService: MuscleService, private exerciceService: ExerciceService, private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get('http://localhost:8000/muscle').subscribe((data: any) => {
      this.muscles = data.results;
    });
    this.http.get('http://localhost:8000/exercice').subscribe((data: any) => {
      this.exercices = data.results;
    });
  }

  onSelectMuscle(event: any) {
    this.selectedMuscleId = parseInt(event.target.value, 10);
}

deleteMuscle() {
    if (this.selectedMuscleId) {
        this.muscleService.deleteMuscle(this.selectedMuscleId).subscribe(
            (response: any) => {
                console.log('Muscle supprimé avec succès:', response);
                // Peut-être des actions supplémentaires ici après la suppression
            },
            (error: any) => {
                console.error('Erreur lors de la suppression du muscle :', error);
            }
        );
    }
}
}