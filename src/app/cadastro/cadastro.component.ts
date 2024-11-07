import { Component, OnChanges, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent{

  constructor(private _router: Router) { }

  AddBookForm = new FormGroup({    
    Name: new FormControl('', Validators.required),
    Synopsis: new FormControl('', Validators.required),
    Rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
  })

  onSubmit(){
    console.log(this.AddBookForm.value);

    if(Number(this.AddBookForm.value.Rating) == 3){
      alert("Rating must not be 3");
    } else {
      this._router.navigate(['livros']);
      // alert("Livro adicionado com sucesso");
    }
  }

}