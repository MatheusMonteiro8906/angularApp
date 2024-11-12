import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { VisualizacaoDeLivrosComponent } from './components/visualizacao-de-livros/visualizacao-de-livros.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmprestimosComponent } from './components/emprestimos/emprestimos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'livros', component: VisualizacaoDeLivrosComponent},
    {path: 'emprestimos', component: EmprestimosComponent},
    {path: '**', component: PageNotFoundComponent},
];
