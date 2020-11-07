//Importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { LoginComponent } from './component/seguridad/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent} from './component/general/home/home.component';
import { ResumenComponent} from './component/general/resumen/resumen.component';

import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { UsuarioComponent } from './component/usuario/usuario.component';


import { InformacionTramiteComponent } from './component/informacion-tramite/informacion-tramite.component';
import { TramitePracticasComponent } from './component/tramite-practicas/tramite-practicas.component';

import { UserComponent } from './component/user/user.component';

//Array de rutas
const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'resumen',component:ResumenComponent},
    {path:'app',component:AppComponent},
    {path: 'estudiante', component: EstudianteComponent},
    {path: 'administrador', component: AdministradorComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'infotramite', component: InformacionTramiteComponent},
    {path: 'practicas', component: TramitePracticasComponent},
    {path: '**', component: LoginComponent}
]
export const appRoutingProviders: any[] = [];
export const routing1: ModuleWithProviders = RouterModule.forRoot(appRoutes);
