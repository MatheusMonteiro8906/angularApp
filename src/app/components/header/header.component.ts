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
    {name: 'Cadastro de livros', ref: "/cadastro"},
    {name: 'Visualização de livros disponíveis', ref: "/livros"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Empréstimos de livros', ref: "/emprestimos"},
    {name: 'Livros mais emprestados', ref: "/mais-emprestados"},
  ]

}
