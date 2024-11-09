import { Component, OnChanges, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent{

  constructor(private _router: Router) { }

  AddBookForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    synopsis: new FormControl('', Validators.required),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
  })

  onSubmit(){
    console.log(this.AddBookForm.value);

    if(Number(this.AddBookForm.value.rating) == 3){
      alert("Rating must not be 3");
    } else {
      this._router.navigate(['livros']);
      // alert("Livro adicionado com sucesso");
    }
  }

}