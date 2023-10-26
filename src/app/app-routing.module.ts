import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { AddExComponent } from './add-ex/add-ex.component';
import { DeleteExComponent } from './delete-ex/delete-ex.component';
import { UpdateExComponent } from './update-ex/update-ex.component';
import { MuscleComponent } from './muscle/muscle.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'muscles', component: MuscleComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'contact',component: ContactComponent },


  { path: 'admin', component: AdministrationComponent },
  { path: 'AddEx', component: AddExComponent },
  { path: 'DeleteEx', component: DeleteExComponent },
  { path: 'UpdateEx', component: UpdateExComponent },

  { path: 'create', component: AddExComponent },
  // { path: 'read', component: ReadUsersComponent },
  { path: 'update/:id', component: UpdateExComponent },
  { path: 'delete/:id', component: DeleteExComponent },
];

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}