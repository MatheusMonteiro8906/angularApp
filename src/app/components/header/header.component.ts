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
    {name: 'Visualização de filmes disponíveis', ref: "/filmes"},
    {name: 'Registro de membros', ref: "/registro-membros"},
    {name: 'Filmes alugados', ref: "/filmes-alugados"},
    {name: 'Filmes mais alugados', ref: "/filmes-mais-alugados"},
  ]

}
