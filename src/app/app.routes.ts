import { Routes } from '@angular/router';
import { Inicial } from './telas/inicial/inicial';
import { Principal } from './telas/principal/principal';
import { Login } from './telas/login/login';
import { Cadusu } from './telas/cadusu/cadusu';
import { CadastroEmpresaComponent } from './telas/cademp/cademp';
//import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'inicial', pathMatch: 'full' },
    { path: 'inicial', component: Inicial },
    { path: 'principal', component: Principal },
    { path: 'login', component: Login },
    { path: 'cadusu', component: Cadusu },
    { path: 'cademp', component: CadastroEmpresaComponent },
];