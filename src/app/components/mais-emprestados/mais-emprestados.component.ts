import { Component } from '@angular/core';
import { CardEmprestimosComponent } from "../card-emprestimos/card-emprestimos.component";
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { CardMaisEmprestadosComponent } from "../card-mais-emprestados/card-mais-emprestados.component";
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-mais-emprestados',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, CardMaisEmprestadosComponent],
  templateUrl: './mais-emprestados.component.html',
  styleUrl: './mais-emprestados.component.css'
})
export class MaisEmprestadosComponent {
  movieList : Movie[] = MoviesService.movies;
}
