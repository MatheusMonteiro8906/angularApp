import { Component, inject, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IBook } from '../../../entities/Book';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-card-livros',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-livros.component.html',
  styleUrl: './card-livros.component.css'
})
export class CardLivrosComponent {
  @Input() book!: IBook; 

  private snackBar = inject(MatSnackBar);

  onDelete(id : Number){
    this.snackBar.open(`Livro ${id} apagado com sucesso!`);
  }

}
