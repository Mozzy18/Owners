import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { MainComponent } from './components/main/main.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {
    path: 'main/new',
    component: NewComponent,
  },
  
  {
    path: '',
    redirectTo: 'main', pathMatch: "full"
    
  },

  {
    path: 'main', component: MainComponent
  },
 
  {
    path: 'main/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
