import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onConfirm(): void {
    this.dialogRef.close();
    this.snackBar.open(`Filme "${this.data.movie}" devolvido com sucesso!`, '', {duration: 3000});
  }
}