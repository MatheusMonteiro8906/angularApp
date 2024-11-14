import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent{

  constructor(private _router: Router) { }

  private snackBar = inject(MatSnackBar);

  AddBookForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    synopsis: new FormControl('', Validators.required),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
  })

  onSubmit(){
    console.log(this.AddBookForm.value);

    if(Number(this.AddBookForm.value.rating) == 3){
      let snackBarRef = this.snackBar.open('Falha ao criar livro!');
    } else {
      let snackBarRef = this.snackBar.open('Livro criado com sucesso!');
      this._router.navigate(['livros']);
    }
  }

}