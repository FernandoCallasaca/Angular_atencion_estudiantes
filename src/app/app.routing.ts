// Importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './component/seguridad/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent} from './component/general/home/home.component';
import { ResumenComponent} from './component/general/resumen/resumen.component';

import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { UserComponent } from './component/user/user.component';

import { ControlTramitesComponent } from './component/tramites/control-tramites/control-tramites.component';

import { CursosEquivalentesTramiteComponent } from './component/tramites/tramite-cursos-equivalentes/cursos-equivalentes-tramite/cursos-equivalentes-tramite.component';
import { CambioHorarioTramiteComponent } from './component/tramites/tramite-cambio-de-horario/cambio-horario-tramite/cambio-horario-tramite.component';
import { MatriculaTramiteComponent } from './component/tramites/tramite-de-matricula/matricula-tramite/matricula-tramite.component';
import { OtrosTramitesTramiteComponent } from './component/tramites/otros-tramites/otros-tramites-tramite/otros-tramites-tramite.component';

import { CarnetUTramiteComponent } from './component/tramites/tramite-carnet-universitario/carnet-u-tramite/carnet-u-tramite.component';
import { ConstanciaPromedioTramiteComponent } from './component/tramites/tramite-constancia-de-promedio/constancia-promedio-tramite/constancia-promedio-tramite.component';
import { ConstanciaEstudiosTramiteComponent } from './component/tramites/tramite-constancia-de-estudios/constancia-estudios-tramite/constancia-estudios-tramite.component';
import { ConstanciaEgresadoTramiteComponent } from './component/tramites/tramite-constancia-de-egresado/constancia-egresado-tramite/constancia-egresado-tramite.component';
import { ControlReportesTramitesComponent } from './component/admin/control-reportes-tramites/control-reportes-tramites.component';
import { EstadoTramitesComponent } from './component/admin/estado-tramites/estado-tramites.component';

//Array de rutas
const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'resumen',component:ResumenComponent},
    {path:'app',component:AppComponent},
    {path: 'estudiante', component: EstudianteComponent},
    {path: 'administrador', component: AdministradorComponent},
    {path: 'usuario', component: UserComponent},
    {path: 'infotramite', component: ControlTramitesComponent},

    {path: 'cursosequivalentes', component: CursosEquivalentesTramiteComponent},
    {path: 'matricula', component: MatriculaTramiteComponent },
    {path: 'cambiohorario', component: CambioHorarioTramiteComponent},
    {path: 'otrostramites', component: OtrosTramitesTramiteComponent},
    
    {path: 'carnetuniversitario', component: CarnetUTramiteComponent},
    {path: 'constanciapromedio', component: ConstanciaPromedioTramiteComponent },
    {path: 'constanciaestudios', component: ConstanciaEstudiosTramiteComponent },
    {path: 'constanciaegresado', component: ConstanciaEgresadoTramiteComponent },
    {path: 'reportestramites', component: ControlReportesTramitesComponent },
    {path: 'estadotramites', component: EstadoTramitesComponent },
    {path: '**', component: LoginComponent}
]
export const appRoutingProviders: any[] = [];
export const routing1: ModuleWithProviders = RouterModule.forRoot(appRoutes);
