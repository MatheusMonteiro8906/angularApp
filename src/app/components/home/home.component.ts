import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  PageLinksList = [
    {name: 'Cadastro de livros', ref: "/cadastro"},
    {name: 'Visualização de livros disponíveis', ref: "/livros"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Empréstimos de livros', ref: "/emprestimos"},
    {name: 'Livros mais emprestados', ref: "/mais-emprestados"},
  ];

}
