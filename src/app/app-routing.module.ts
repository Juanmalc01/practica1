import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo:'inicio'},
{ path: 'inicio', component: InicioComponent},
{ path: 'eventos', component: EventosComponent},
{ path: 'quien-somos', component: QuienSomosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
