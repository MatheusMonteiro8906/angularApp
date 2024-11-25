import { Component } from '@angular/core';
import { IBook } from '../../../entities/Book';
import { BookServicesService } from '../../services/book-services.service';
import { CardEmprestimosComponent } from "../card-emprestimos/card-emprestimos.component";
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { CardMaisEmprestadosComponent } from "../card-mais-emprestados/card-mais-emprestados.component";

@Component({
  selector: 'app-mais-emprestados',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, CardMaisEmprestadosComponent],
  templateUrl: './mais-emprestados.component.html',
  styleUrl: './mais-emprestados.component.css'
})
export class MaisEmprestadosComponent {
  bookList : IBook[] = BookServicesService.books;
}
