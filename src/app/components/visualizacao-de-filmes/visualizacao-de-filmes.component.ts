import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../../entities/movie';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CardFilmesComponent } from '../card-filmes/card-filmes.component';

@Component({
  selector: 'app-visualizacao-de-filmes',
  standalone: true,
  imports: [NgFor, CardFilmesComponent, NgIf, CommonModule],
  providers: [MoviesService],
  templateUrl: './visualizacao-de-filmes.component.html',
  styleUrls: ['./visualizacao-de-filmes.component.css']
})
export class VisualizacaoDeFilmesComponent {
  movieList$: Observable<Movie[]>; 

  constructor(private movieService: MoviesService) {
    this.movieList$ = this.movieService.getActiveMovies(); 
  }
}
