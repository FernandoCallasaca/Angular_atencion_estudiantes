// Importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './component/seguridad/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent} from './component/general/home/home.component';
import { ResumenComponent} from './component/general/resumen/resumen.component';

import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

import { ControlTramitesComponent } from './component/tramites/control-tramites/control-tramites.component';

import { CarnetUTramiteComponent } from './component/tramites/tramite-carnet-universitario/carnet-u-tramite/carnet-u-tramite.component';
import { ConstanciaPromedioTramiteComponent } from './component/tramites/tramite-constancia-de-promedio/constancia-promedio-tramite/constancia-promedio-tramite.component';
import { ConstanciaEstudiosTramiteComponent } from './component/tramites/tramite-constancia-de-estudios/constancia-estudios-tramite/constancia-estudios-tramite.component';
import { ConstanciaEgresadoTramiteComponent } from './component/tramites/tramite-constancia-de-egresado/constancia-egresado-tramite/constancia-egresado-tramite.component';


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
    {path: 'infotramite', component: ControlTramitesComponent},

    {path: 'carnetuniversitario', component: CarnetUTramiteComponent},
    {path: 'constanciapromedio', component: ConstanciaPromedioTramiteComponent },
    {path: 'constanciaestudios', component: ConstanciaEstudiosTramiteComponent  },
    {path: 'constanciaegresado', component: ConstanciaEgresadoTramiteComponent  },
    {path: '**', component: LoginComponent}
]
export const appRoutingProviders: any[] = [];
export const routing1: ModuleWithProviders = RouterModule.forRoot(appRoutes);
