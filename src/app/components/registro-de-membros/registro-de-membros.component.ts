import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-de-membros',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './registro-de-membros.component.html',
  styleUrl: './registro-de-membros.component.css'
})
export class RegistroDeMembrosComponent {
  constructor(private _router: Router) { }

  private snackBar = inject(MatSnackBar);

  AddMovieForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(12), Validators.max(110)]),
  })

  onSubmit(){
    console.log(this.AddMovieForm.value);

    if(Number(this.AddMovieForm.value.name) == 3){
      this.snackBar.open('Falha ao criar usuário!');
    } else {
      this.snackBar.open('Usuário criado com sucesso!');
      this._router.navigate(['/']);
    }
  }
}
