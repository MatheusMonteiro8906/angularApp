import { Component, Input } from '@angular/core';
import { IBook } from '../../entities/Book';

@Component({
  selector: 'app-card-livros',
  standalone: true,
  imports: [],
  templateUrl: './card-livros.component.html',
  styleUrl: './card-livros.component.css'
})
export class CardLivrosComponent {

  @Input() book!: IBook; 

}
