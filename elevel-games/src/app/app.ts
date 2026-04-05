import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Necessário adicionar essa importação
import { HttpClientModule } from '@angular/common/http'
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';




/*Importações Angular Material*/
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';





@Component({
  selector: 'app-root',
  imports: [
    Menu,
    Rodape,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
  ],



  templateUrl: './app.html',
  styleUrl: './app.css'



})
export class App {
  protected readonly title = signal('elevel-games');
}
