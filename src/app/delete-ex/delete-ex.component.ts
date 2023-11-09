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
  constructor(private muscleService: MuscleService, private exerciceService: ExerciceService, private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get('http://localhost:8000/muscle').subscribe((data: any) => {
      this.muscles = data.results;
    });
    this.http.get('http://localhost:8000/exercice').subscribe((data: any) => {
      this.exercices = data.results;
    });
  }


  deleteExercise() {
    // Vérifiez si l'identifiant de l'exercice est valide (non nul ou non négatif)
    if (this.exerciceId > 0) {
      // Appelez le service d'exercices pour supprimer l'exercice en utilisant son identifiant
      this.exerciceService.deleteExercice(this.exerciceId).subscribe(
        (response: any) => {
          // Effectuez des actions après la suppression, par exemple, mettre à jour la liste des exercices
          // Réinitialisez l'identifiant si nécessaire
          this.exerciceId = 0;
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de l\'exercice :', error);
        }
      );
    } else {
      console.error('Identifiant de l\'exercice invalide.');
    }
  }
}

