import { ApplicationConfig, Injectable } from '@angular/core';
import { IBook } from '../../entities/Book';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(private http: HttpClient) { }

   static books : IBook[] = [
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senho  rSenhorSenhorSenhorSenhorSenhor SenhorSenhorSenhorSenhor aaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa ddddddddddd dddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd SenhorSenhorSenhorSenhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
    },
    {
      name: 'Harry Potter',
      synopsis: 'Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.',
      rating: 4,
      id: 1,
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 0,
    },    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 0,
    },    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 0,
    },
  ];
  
}
