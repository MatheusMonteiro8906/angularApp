import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../entities/movie';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private api = environment.API_PATH;

  private static movieservice = new BehaviorSubject<Movie[]>([]);
  private static activevMovieservice = new BehaviorSubject<Movie[]>([]);
  
  static movies$ = MoviesService.movieservice.asObservable();
  static activeMovies$ = MoviesService.activevMovieservice.asObservable();

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(`${this.api}filmes`).subscribe((movies) => {
      MoviesService.movieservice.next(movies);
    });
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

}
