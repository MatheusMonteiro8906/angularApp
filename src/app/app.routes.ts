import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VisualizacaoDeLivrosComponent } from './visualizacao-de-livros/visualizacao-de-livros.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'livros', component: VisualizacaoDeLivrosComponent},
    {path: '**', component: PageNotFoundComponent},
];
