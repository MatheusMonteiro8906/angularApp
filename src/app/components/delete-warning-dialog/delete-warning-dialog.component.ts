import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onDelete(): void {
    this.dialogRef.close(this.data.id);
    this.snackBar.open(`Filme "${this.data.movie}" apagado com sucesso!`, '', {duration: 3000});
  }
}