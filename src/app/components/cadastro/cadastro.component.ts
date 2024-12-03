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

  AddMovieForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    synopsis: new FormControl('', [Validators.required, Validators.minLength(20)]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  onSubmit(){
    console.log(this.AddMovieForm.value);

    if(Number(this.AddMovieForm.value.rating) == 3){
        this.snackBar.open('Falha ao adicionar filme!', '', {duration: 3000});
    } else {
        this.snackBar.open('Filme adicionado com sucesso!', '', {duration: 3000});
      this._router.navigate(['filmes']);
    }
  }
}