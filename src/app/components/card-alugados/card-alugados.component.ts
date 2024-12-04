import { Component, inject, Input } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MovieDevolutionDialogComponent } from '../movie-devolution-dialog/movie-devolution-dialog.component';

@Component({
  selector: 'app-card-alugados',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-alugados.component.html',
  styleUrl: './card-alugados.component.css'
})
export class CardAlugadosComponent {
  @Input() movie!: Movie

  readonly dialog = inject(MatDialog);

  openDevolutionDialog() {
    const dialogRef = this.dialog.open(MovieDevolutionDialogComponent, {
      data: {id: this.movie.id, movie: this.movie.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
