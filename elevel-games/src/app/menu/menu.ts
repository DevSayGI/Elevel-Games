import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Rodape } from '../rodape/rodape';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    Rodape,
    CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
