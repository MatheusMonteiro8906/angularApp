import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(private movie: MoviesService) { }

  ngOnInit(): void {
      console.log("OnInit called")
      this.movie.getMovies().subscribe(data => {
          console.log(data)
      })
  }

  ngAfterViewInit(): void {
      console.log("AfterViewInit called")
  }
  
}