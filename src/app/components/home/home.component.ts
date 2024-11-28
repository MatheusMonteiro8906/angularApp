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
    {name: 'Cadastro de filmes', ref: "/cadastro"},
    {name: 'Visualização de filmes disponíveis', ref: "/filmes"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Empréstimos de filmes', ref: "/emprestimos"},
    {name: 'Filmes mais emprestados', ref: "/mais-emprestados"},
  ];

}
