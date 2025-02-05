import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../entities/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
export interface DialogData {
  id: number;
  movie: string;
}

@Component({
  selector: 'app-movie-rent-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './movie-rent-dialog.component.html',
  styleUrl: './movie-rent-dialog.component.css'
})
export class MovieRentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MovieRentDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  private snackBar = inject(MatSnackBar);

  selected = '';
  userList$: Observable<User[]>; 
  
    constructor(private _router: Router, private movieService : MoviesService, private userService: UsersService) {
      this.userList$ = this.userService.getUsers(); 
    }

  onNoClick(): void {
    console.log(this.selected)
    this.dialogRef.close();
  }

    onConfirm(): void {
     
      this.movieService.rentMovie(this.data.id, Number(this.selected)).subscribe({
        next: () => {
          this.snackBar.open(`Filme "${this.data.movie}" alugado com sucesso!`, '', {duration: 3000});
          this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this._router.navigate(['/filmes-alugados']);
          });   
          this.dialogRef.close();
        },
        error: () => {
          this.snackBar.open('Falha ao alugar Filme!', '', { duration: 3000 });
        }
      });
  }
}
