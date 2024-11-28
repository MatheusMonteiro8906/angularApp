import { Component } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
import { CardFilmesComponent } from '../card-filmes/card-filmes.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-visualizacao-de-filmes',
  standalone: true,
  imports: [NgFor, CardFilmesComponent, NgIf],
  templateUrl: './visualizacao-de-filmes.component.html',
  styleUrl: './visualizacao-de-filmes.component.css'
})
export class VisualizacaoDeFilmesComponent {

  movieList : Movie[] = MoviesService.movies;

}
