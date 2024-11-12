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
    {name: 'Visualização de livros disponíveis', ref: "/livros"},
    {name: 'Devolução de livros', ref: "/devolucao-livros"},
    {name: 'Livros mais emprestados', ref: "/livros-mais-emprestados"}
  ]

}
