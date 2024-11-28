import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistroDeMembrosComponent } from './components/registro-de-membros/registro-de-membros.component';
import { VisualizacaoDeFilmesComponent } from './components/visualizacao-de-filmes/visualizacao-de-filmes.component';
import { FilmesAlugadosComponent } from './components/filmes-alugados/filmes-alugados.component';
import { FilmesMaisAlugadosComponent } from './components/filmes-mais-alugados/filmes-mais-alugados.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'filmes', component: VisualizacaoDeFilmesComponent},
    {path: 'filmes-alugados', component: FilmesAlugadosComponent},
    {path: 'filmes-mais-alugados', component: FilmesMaisAlugadosComponent},
    {path: 'registro-membros', component: RegistroDeMembrosComponent},
    {path: '**', component: PageNotFoundComponent},
];
