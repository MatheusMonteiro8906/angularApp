import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { range } from 'rxjs';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule ],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.css'
})
export class EmprestimosComponent {

  constructor(  ) { }

    readonly rangeForm = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    });
}
