import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardLivrosComponent } from "../card-livros/card-livros.component";
import { IBook } from '../../entities/Book';
@Component({
  selector: 'app-visualizacao-de-livros',
  standalone: true,
  imports: [NgFor, CardLivrosComponent],
  templateUrl: './visualizacao-de-livros.component.html',
  styleUrl: './visualizacao-de-livros.component.css'
})
export class VisualizacaoDeLivrosComponent {

  AllBooks : IBook[] = [
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
    },
    {
      name: 'Harry Potter',
      synopsis: 'Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.',
      rating: 4,
      id: 1,
    }
  ];

  constructor() {}
}
