import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

export interface DialogData {
  id: number;
  movie: string;
}

@Component({
  selector: 'app-movie-devolution-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './movie-devolution-dialog.component.html',
  styleUrl: './movie-devolution-dialog.component.css'
})
export class MovieDevolutionDialogComponent {

  readonly dialogRef = inject(MatDialogRef<MovieDevolutionDialogComponent>);
  private snackBar = inject(MatSnackBar);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  
  constructor(private _router: Router, private movieService : MoviesService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onConfirm(): void {
    this.movieService.ReturnMovie(this.data.id).subscribe({
      next: () => {
        this.snackBar.open(`Filme "${this.data.movie}" devolvido com sucesso!`, '', {duration: 3000});
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this._router.navigate(['/filmes']);
        });   
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Falha ao devolver Filme!', '', { duration: 3000 });
      }
    });

  }
}