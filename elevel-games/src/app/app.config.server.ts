import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipal } from '../app/painel-principal/painel-principal';
import { Login } from './login/login';



const routes: Routes = [
  { path: 'Principal', component: PainelPrincipal },
  { path: 'login', component: Login },
  { path: '', redirectTo: './inicio', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }