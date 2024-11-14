import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IBook } from '../../../entities/Book';

@Component({
  selector: 'app-card-emprestimos',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, MatButtonModule],
  templateUrl: './card-emprestimos.component.html',
  styleUrl: './card-emprestimos.component.css'
})
export class CardEmprestimosComponent {
  @Input() book!: IBook; 
}
