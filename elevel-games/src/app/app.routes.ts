import { Routes } from '@angular/router';
import { PainelPrincipal } from './painel-principal/painel-principal';

export const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipal },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' }
];