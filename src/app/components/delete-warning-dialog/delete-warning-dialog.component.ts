import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

export interface DialogData {
  id: number;
  movie: string;
}

@Component({
  selector: 'app-delete-warning-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-warning-dialog.component.html',
  styleUrl: './delete-warning-dialog.component.css'
})

export class DeleteWarningDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteWarningDialogComponent>);
  private snackBar = inject(MatSnackBar);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private _router: Router, private movieService : MoviesService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onDelete(): void {
    this.movieService.deleteMovie(this.data.id).subscribe({
      next: () => {
        this.snackBar.open(`Filme "${this.data.movie}" apagado com sucesso!`, '', {duration: 3000});
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this._router.navigate(['/filmes']);
        });   
        this.dialogRef.close();     
      },
      error: () => {
        this.snackBar.open('Falha ao apagar Filme!', '', { duration: 3000 });
      }
    });
  }
}