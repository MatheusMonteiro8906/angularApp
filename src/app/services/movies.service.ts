import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../entities/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private api = environment.API_PATH;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(`${this.api}filmes`);
  }
  
  getActiveMovies() {
    return this.http.get<Movie[]>(`${this.api}filmes/disponiveis`);
  }

  createMovie(movie: Movie) {
    return this.http.post(`${this.api}filmes`, movie);
  }
  
  updateMovie(movie: Movie) {
    return this.http.patch(`${this.api}filmes/${movie.id}`, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.api}filmes/${id}`);
  }

  getMovie(id: number) {
    return this.http.get<Movie>(`${this.api}filmes/${id}`);
  }

    static movies : Movie[] = [
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senho  rSenhorSenhorSenhorSenhorSenhor SenhorSenhorSenhorSenhor aaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa ddddddddddd dddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd SenhorSenhorSenhorSenhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 0,
     rentCounter: 16,
     price: 45.50
    },
    {
      name: 'Harry Potter',
      synopsis: 'Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.',
      rating: 4,
      id: 1,
      rentCounter: 23,
      price: 16.32    
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 2,
      rentCounter: 43,
      price: 42.12
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 3,
      rentCounter: 12,
      price: 47
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'O Senhor dos Anéis é um livro de alta fantasia escrito pelo autor britânico J. R. R. Tolkien. A história começa como sequência de um livro anterior de Tolkien, O Hobbit, e logo se desenvolve numa história muito maior.',
      rating: 5,
      id: 5,
      rentCounter: 17,
      price: 16
    },
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 6,
      rentCounter: 0,
      price: 7.5
    },    
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 0,
      rentCounter: 0,
      price: 2
    },   
    {
      name: 'O Senhor dos Anéis',
      synopsis: 'maior.',
      rating: 5,
      id: 0,
      rentCounter: 0,
      price: 145.00
    },
  ];
  }
