import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acceuil' },
  { path: 'acceuil', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
