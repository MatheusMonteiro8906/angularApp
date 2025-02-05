import { Component } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CardMaisAlugadosComponent } from '../card-mais-alugados/card-mais-alugados.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filmes-mais-alugados',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, CardMaisAlugadosComponent, CommonModule],
  templateUrl: './filmes-mais-alugados.component.html',
  styleUrl: './filmes-mais-alugados.component.css'
})

export class FilmesMaisAlugadosComponent {
  movieList$: Observable<Movie[]>; 

  constructor(private movieService: MoviesService) {
    this.movieList$ = this.movieService.getMostRentedMovies(); 
  }
}