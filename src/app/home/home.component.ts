import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  PageLinksList = [
    {name: 'Cadastro', ref: "/cadastro"},
    {name: 'Exclusão de livros', ref: "/exclusao-livros"},
    {name: 'Visualização de livros disponíveis', ref: "/livros"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Empréstimos de livros', ref: "/emprestimos"},
    {name: 'Devolução de livros', ref: "/devolucao-livros"},
    {name: 'Gerenciamento de atrasos', ref: "/gerenciamento-atrasos"},
    {name: 'Histórico de empréstimos', ref: "/historico-emprestimos"},
    {name: 'Relatórios de empréstimos por período', ref: "/relatorios-emprestimos"},
    {name: 'Livros mais emprestados', ref: "/livros-mais-emprestados"}
  ];

}
