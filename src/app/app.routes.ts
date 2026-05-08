import {Routes} from '@angular/router';
import {Home} from './pages/home';
import {Sobre} from './pages/sobre';
import {Especialidades} from './pages/especialidades';
import {Tecnologias} from './pages/tecnologias';
import {Profissionais} from './pages/profissionais';
import {Unidades} from './pages/unidades';
import {Contato} from './pages/contato';
import {Desenvolvedor} from './pages/desenvolvedor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'especialidades', component: Especialidades },
  { path: 'tecnologias', component: Tecnologias },
  { path: 'profissionais', component: Profissionais },
  { path: 'unidades', component: Unidades },
  { path: 'contato', component: Contato },
  { path: 'desenvolvedor', component: Desenvolvedor },
  { path: '**', redirectTo: '' }
];
