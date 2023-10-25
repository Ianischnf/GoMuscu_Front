import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { AddExComponent } from './add-ex/add-ex.component';
import { DeleteExComponent } from './delete-ex/delete-ex.component';
import { UpdateExComponent } from './update-ex/update-ex.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: 'AddEx', component: AddExComponent },
  { path: 'DeleteEx', component: DeleteExComponent },
  { path: 'UpdateEx', component: UpdateExComponent },
];

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}