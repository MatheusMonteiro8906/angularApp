import { Component, Input } from '@angular/core';
import { Movie } from '../../../entities/movie';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-mais-alugados',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, NgClass],
  templateUrl: './card-mais-alugados.component.html',
  styleUrl: './card-mais-alugados.component.css'
})
export class CardMaisAlugadosComponent {
  @Input() movie!: Movie; 
  @Input() number!: Number;
}
