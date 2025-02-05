import { Component, inject, Input } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteWarningDialogComponent } from '../delete-warning-dialog/delete-warning-dialog.component';
import { MovieRentDialogComponent } from '../movie-rent-dialog/movie-rent-dialog.component';
import { MovieEditDialogComponent } from '../movie-edit-dialog/movie-edit-dialog.component';

@Component({
  selector: 'app-card-filmes',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule, MatDialogModule],
  templateUrl: './card-filmes.component.html',
  styleUrl: './card-filmes.component.css'
})
export class CardFilmesComponent {
  @Input() movie!: Movie; 

  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);

  openEditDialog() {
    const dialogRef = this.dialog.open(MovieEditDialogComponent, {
      data: {id: this.movie.id, nome: this.movie.nome, preco: this.movie.preco, sinopse: this.movie.sinopse, rating: this.movie.rating}
    });
  }
  
  openRentDialog() {
    const dialogRef = this.dialog.open(MovieRentDialogComponent, {
      data: {id: this.movie.id, movie: this.movie.nome}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      data: {id: this.movie.id, movie: this.movie.nome}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}