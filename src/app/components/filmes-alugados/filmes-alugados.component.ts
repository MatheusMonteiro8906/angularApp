import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NgFor, NgIf } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';
import { CardAlugadosComponent } from '../card-alugados/card-alugados.component';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', 
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-filmes-alugados',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, NgFor, NgIf, CardAlugadosComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],  templateUrl: './filmes-alugados.component.html',
  styleUrl: './filmes-alugados.component.css'
})
export class FilmesAlugadosComponent {

  readonly rangeForm = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  movieList : Movie[] = MoviesService.movies;

  
  onsubmit() {
    const teste = true;
     const teste2 = (this.rangeForm.value as any).end._i;
  }
}
