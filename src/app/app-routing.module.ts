import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaEtiquetaComponent } from './Pages/lista-etiqueta/lista-etiqueta.component';
import { ListaExpertoComponent } from './Pages/lista-experto/lista-experto.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/expertos'
  },
  {
    path: 'expertos',
    component: ListaExpertoComponent
  },
  {
    path: 'etiquetas',
    component: ListaEtiquetaComponent
  },

  { path: 'login', component:  LogInComponent},

  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
