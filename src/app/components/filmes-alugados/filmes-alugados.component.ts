import { Component } from '@angular/core';
import { ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
import { CardAlugadosComponent } from '../card-alugados/card-alugados.component';
@Component({
  selector: 'app-filmes-alugados',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, MatButtonModule, MatCardModule, NgFor, NgIf, CardAlugadosComponent],
  providers: [],  templateUrl: './filmes-alugados.component.html',
  styleUrl: './filmes-alugados.component.css'
})
export class FilmesAlugadosComponent {
  movieList : Movie[] = MoviesService.movies;
}