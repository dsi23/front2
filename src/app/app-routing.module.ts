import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { EditChauffeurComponent } from './chauffeur/edit-chauffeur/edit-chauffeur.component';
const routes: Routes = [
  {path:'chauffeurs',component:ChauffeurComponent},
  {path:'AddChauf',component:EditChauffeurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
