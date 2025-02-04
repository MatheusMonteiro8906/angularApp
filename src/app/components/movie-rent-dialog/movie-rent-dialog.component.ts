import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
export interface DialogData {
  id: number;
  movie: string;
}

@Component({
  selector: 'app-movie-rent-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './movie-rent-dialog.component.html',
  styleUrl: './movie-rent-dialog.component.css'
})
export class MovieRentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MovieRentDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  private snackBar = inject(MatSnackBar);

  selected = '';
  userList = UsersService.users$;

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onConfirm(): void {
    this.dialogRef.close();
    this.snackBar.open(`Filme "${this.data.movie}" alugado com sucesso!`, '', {duration: 3000});
    // TODO API
  }

}
