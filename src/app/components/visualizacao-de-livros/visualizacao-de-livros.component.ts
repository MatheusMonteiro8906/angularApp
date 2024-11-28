import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardLivrosComponent } from "../card-livros/card-livros.component";
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-visualizacao-de-livros',
  standalone: true,
  imports: [NgFor, CardLivrosComponent, NgIf],
  templateUrl: './visualizacao-de-livros.component.html',
  styleUrl: './visualizacao-de-livros.component.css'
})
export class VisualizacaoDeLivrosComponent {
  constructor() {}

  movieList : Movie[] = MoviesService.movies;

}
