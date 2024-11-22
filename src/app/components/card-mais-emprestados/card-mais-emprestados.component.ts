import { Component, Input } from '@angular/core';
import { IBook } from '../../../entities/Book';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-mais-emprestados',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './card-mais-emprestados.component.html',
  styleUrl: './card-mais-emprestados.component.css'
})
export class CardMaisEmprestadosComponent {
  @Input() book!: IBook; 
  @Input() number!: Number;
}
