import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJokesComponent } from './create-jokes/create-jokes.component';
import { JokesDetailComponent } from './jokes-detail/jokes-detail.component';
import { ListJokesComponent } from './list-jokes/list-jokes.component';
import { UpdateJokesComponent } from './update-jokes/update-jokes.component';

const routes: Routes = [
  {path:'jokes', component:ListJokesComponent},
  {path: 'addjoke', component: CreateJokesComponent},
  {path: 'editjoke/:id', component: UpdateJokesComponent},
  {path: 'viewjoke/:id', component: JokesDetailComponent},
  {path: '', redirectTo:'jokes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
