import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent{

  constructor(private _router: Router, private movieservice : MoviesService) { }

  private snackBar = inject(MatSnackBar);

  AddMovieForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    synopsis: new FormControl('', [Validators.required, Validators.minLength(20)]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  onSubmit(){
    const movie = { 
      nome: this.AddMovieForm.value.name!, 
      sinopse: this.AddMovieForm.value.synopsis!,
      rating: Number(this.AddMovieForm.value.rating!),
      preco: Number(this.AddMovieForm.value.price!) 
    };

    this.movieservice.createMovie(movie).subscribe({
      next: () => {
        this.snackBar.open('Filme adicionado com sucesso!', '', {duration: 3000});
      this._router.navigate(['filmes']);
      },
      error: () => {
        this.snackBar.open('Falha ao adicionar filme!', '', {duration: 3000});
      }
    });
  }
}