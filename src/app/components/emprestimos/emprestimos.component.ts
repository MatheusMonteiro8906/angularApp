import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { CardLivrosComponent } from "../card-livros/card-livros.component";
import { NgFor, NgIf } from '@angular/common';
import { CardEmprestimosComponent } from "../card-emprestimos/card-emprestimos.component";
import {MatDividerModule} from '@angular/material/divider';
import { Movie } from '../../../entities/movie';
import { MoviesService } from '../../services/movies.service';

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
  selector: 'app-emprestimos',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, CardLivrosComponent, NgFor, NgIf, CardEmprestimosComponent],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.css'
})
export class EmprestimosComponent {
  
  constructor(  ) { }

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
