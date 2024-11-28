import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  HeaderItemList = [    
    {name: 'Home', ref: "/"},
    {name: 'Cadastro de Filmes', ref: "/cadastro"},
    {name: 'Visualização de livros disponíveis', ref: "/filmes"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Empréstimos de filmes', ref: "/emprestimos"},
    {name: 'Filmes mais emprestados', ref: "/mais-emprestados"},
  ]

}
