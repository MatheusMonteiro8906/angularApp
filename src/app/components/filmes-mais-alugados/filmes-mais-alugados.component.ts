import { Component } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { CardMaisAlugadosComponent } from '../card-mais-alugados/card-mais-alugados.component';

@Component({
  selector: 'app-filmes-mais-alugados',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, CardMaisAlugadosComponent],
  templateUrl: './filmes-mais-alugados.component.html',
  styleUrl: './filmes-mais-alugados.component.css'
})
export class FilmesMaisAlugadosComponent {
  movieList : Movie[] = MoviesService.movies;

}
