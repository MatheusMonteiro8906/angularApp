import { Component, inject, Input } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-filmes',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-filmes.component.html',
  styleUrl: './card-filmes.component.css'
})
export class CardFilmesComponent {
  @Input() movie!: Movie; 

  private snackBar = inject(MatSnackBar);

  onDelete(id : Number){
    this.snackBar.open(`Filme ${id} apagado com sucesso!`);
  }
}
