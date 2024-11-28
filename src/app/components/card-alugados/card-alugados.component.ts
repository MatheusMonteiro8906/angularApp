import { Component, Input } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-alugados',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-alugados.component.html',
  styleUrl: './card-alugados.component.css'
})
export class CardAlugadosComponent {
  @Input() movie!: Movie
}
