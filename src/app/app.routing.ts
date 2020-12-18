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
import { MatriculaTramiteComponent } from './component/tramites/tramite-de-matricula/matricula-tramite/matricula-tramite.component';
import { ReinicioEstudiosTramiteComponent } from './component/tramites/tramite-reinicio-de-estudios/reinicio-estudios-tramite/reinicio-estudios-tramite.component';
import { OtrosTramitesTramiteComponent } from './component/tramites/otros-tramites/otros-tramites-tramite/otros-tramites-tramite.component';
import { MatriculaCreditosTramiteComponent } from './component/tramites/tramite-matricula-creditos/matricula-creditos-tramite/matricula-creditos-tramite.component';
import { CursosParalelosTramiteComponent } from './component/tramites/tramite-cursos-paralelos/cursos-paralelos-tramite/cursos-paralelos-tramite.component';
import { CruceHorariosTramiteComponent } from './component/tramites/tramite-cruce-horarios/cruce-horarios-tramite/cruce-horarios-tramite.component';

import { ControlReportesTramitesComponent } from './component/admin/control-reportes-tramites/control-reportes-tramites.component';
import { ControlEstadoTramitesComponent } from './component/admin/control-estado-tramites/control-estado-tramites.component';
import { MisTramitesComponent } from './component/tramites/mis-tramites/mis-tramites.component';
import { MisConsultasComponent } from './component/consultas/mis-consultas/mis-consultas.component';
import { InformativoPrincipalComponent } from './component/tramites/tramites-informativos/informativo-principal/informativo-principal.component';
import { SecretariaComponent } from './component/secretaria/secretaria.component';
import { OrientacionSesionesComponent } from './component/tramites/tramites-informativos/orientacion-sesiones/orientacion-sesiones.component';
import { FiltroFechaComponent } from './component/admin/filtro-fecha/filtro-fecha.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'resumen', component: ResumenComponent},
    {path: 'app', component: AppComponent},
    {path: 'estudiante', component: EstudianteComponent},
    {path: 'administrador', component: AdministradorComponent},
    {path: 'secretaria', component: SecretariaComponent},
    {path: 'usuario', component: UserComponent},
    {path: 'infotramite', component: ControlTramitesComponent},

    {path: 'cursosequivalentes', component: CursosEquivalentesTramiteComponent},
    {path: 'matricula', component: MatriculaTramiteComponent },
    {path: 'reinicioestudios', component: ReinicioEstudiosTramiteComponent },
    {path: 'matriculacreditos', component: MatriculaCreditosTramiteComponent },
    {path: 'cursosparalelos', component: CursosParalelosTramiteComponent },
    {path: 'crucehorarios', component: CruceHorariosTramiteComponent },

    {path: 'otrostramites', component: OtrosTramitesTramiteComponent},

    {path: 'reportestramites', component: ControlReportesTramitesComponent },
    {path: 'controlestadotramites', component: ControlEstadoTramitesComponent  },
    {path: 'mistramites', component: MisTramitesComponent },
    {path: 'misconsultas', component: MisConsultasComponent },
    {path: 'filtrofechas', component: FiltroFechaComponent },
    {path: 'informativoprincipal', component: InformativoPrincipalComponent },
    {path: 'orientacionsesiones', component: OrientacionSesionesComponent},
    {path: '**', component: LoginComponent}
]
export const appRoutingProviders: any[] = [];
export const routing1: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
