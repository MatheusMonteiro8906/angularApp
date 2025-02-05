import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../../../entities/movie';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './movie-edit-dialog.component.html',
  styleUrl: './movie-edit-dialog.component.css'
})
export class MovieEditDialogComponent {

  constructor(private _router: Router, private movieService : MoviesService) { }

  readonly dialogRef = inject(MatDialogRef<MovieEditDialogComponent>);
  private snackBar = inject(MatSnackBar);
  readonly data = inject<Movie>(MAT_DIALOG_DATA);

  EditMovieForm = new FormGroup({    
    name: new FormControl(this.data.nome, Validators.required),
    synopsis: new FormControl(this.data.sinopse, [Validators.required, Validators.minLength(20)]),
    rating: new FormControl(this.data.rating, [Validators.required, Validators.min(0), Validators.max(5)]),
    price: new FormControl(this.data.preco, [Validators.required, Validators.min(0)]),
  })

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  onSubmit(): void {
    const movie : Movie = { 
      id: this.data.id,
      nome: this.EditMovieForm.value.name!,
      sinopse: this.EditMovieForm.value.synopsis!,
      rating: Number(this.EditMovieForm.value.rating),
      preco: Number(this.EditMovieForm.value.price)
    };

    this.movieService.updateMovie(movie).subscribe({
      next: () => {
        this.snackBar.open('Filmes atualizado com sucesso!', '', { duration: 3000 });
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this._router.navigate(['/filmes']);
        });   
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Falha ao Atualizar filme!', '', { duration: 3000 });
      }
    });

  }
}
