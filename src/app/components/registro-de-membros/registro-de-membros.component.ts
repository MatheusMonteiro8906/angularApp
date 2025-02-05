import { Component, inject } from '@angular/core'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registro-de-membros',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './registro-de-membros.component.html',
  styleUrl: './registro-de-membros.component.css'
})
export class RegistroDeMembrosComponent {
  constructor(private _router: Router, private userService: UsersService) { }

  private snackBar = inject(MatSnackBar);

  AddMovieForm = new FormGroup({    
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(12), Validators.max(110)]),
  })

  onSubmit(){
    const user = { 
      nome: this.AddMovieForm.value.name + " " + this.AddMovieForm.value.lastname, 
      idade: Number(this.AddMovieForm.value.age) 
    };
  
    this.userService.createUser(user).subscribe({
      next: () => {
        this.snackBar.open('Usuário criado com sucesso!', '', { duration: 3000 });
        this._router.navigate(['/']);
      },
      error: () => {
        this.snackBar.open('Falha ao criar usuário!', '', { duration: 3000 });
      }
    });
  }
  
}