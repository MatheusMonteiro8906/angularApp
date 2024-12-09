import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../../../entities/movie';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie-edit-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './movie-edit-dialog.component.html',
  styleUrl: './movie-edit-dialog.component.css'
})
export class MovieEditDialogComponent {

  readonly dialogRef = inject(MatDialogRef<MovieEditDialogComponent>);
  private snackBar = inject(MatSnackBar);
  readonly data = inject<Movie>(MAT_DIALOG_DATA);

  EditMovieForm = new FormGroup({    
    name: new FormControl(this.data.name, Validators.required),
    synopsis: new FormControl(this.data.synopsis, [Validators.required, Validators.minLength(20)]),
    rating: new FormControl(this.data.rating, [Validators.required, Validators.min(0), Validators.max(5)]),
    price: new FormControl(this.data.price, [Validators.required, Validators.min(0)]),
  })

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onSubmit(): void {
    this.dialogRef.close();
    this.snackBar.open(`Filme "${this.data.name}" editado com sucesso!`, '', {duration: 3000});
  }
}
