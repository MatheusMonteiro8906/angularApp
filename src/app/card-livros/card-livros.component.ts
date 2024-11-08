import { Component, Input } from '@angular/core';
import { IBook } from '../../entities/Book';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-card-livros',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-livros.component.html',
  styleUrl: './card-livros.component.css'
})
export class CardLivrosComponent {

  @Input() book!: IBook; 

}
