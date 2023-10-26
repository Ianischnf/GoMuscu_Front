import { Component } from '@angular/core';
import { ExerciceService } from '../services/exercices.service';

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

  onSubmit() {
    if(this.selectedFrom === 'muscle') {
      console.log('Ajout de muscle : ' + this.muscleName);
    } else if(this.selectedFrom === 'exer'){
      console.log('Ajout d\'exercice'  + this.exerciseName);
    }
  }

  constructor(private exerciseService: ExerciceService) {}

  createExercise() {
    // Appelez le service pour créer un nouvel exercice
    this.exerciseService.createExercice(this.newExercice).subscribe((response) => {
      // Mettez à jour la liste des exercices ou effectuez d'autres actions
      // Réinitialisez le formulaire si nécessaire
      this.newExercice = { name: '', muscle: '', description: '' };
    });
  }


}
