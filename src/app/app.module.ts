import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing1, appRoutingProviders } from './app.routing';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './component/base/base.component';
import { LoginComponent } from './component/seguridad/login/login.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './component/general/home/home.component';
import { MenuComponent } from './component/general/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ResumenComponent } from './component/general/resumen/resumen.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SnackComponent } from './component/generico/snack/snack.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ResetearclaveComponent } from './component/generico/resetarclave/resetarclave.component';
import { ConfirmarComponent } from './component/generico/confirmar/confirmar.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { UserComponent } from './component/user/user.component';
import { UsereditComponent } from './component/useredit/useredit.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteeditarComponent } from './component/estudianteeditar/estudianteeditar.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorEditarComponent } from './component/administrador-editar/administrador-editar.component';

import { CarnetUInfoComponent } from './component//tramites/tramite-carnet-universitario/carnet-u-info/carnet-u-info.component';
import { CarnetUTramiteComponent } from './component//tramites/tramite-carnet-universitario/carnet-u-tramite/carnet-u-tramite.component';
import { ControlTramitesComponent } from './component/tramites/control-tramites/control-tramites.component';
import { ConstanciaEgresadoInfoComponent } from './component/tramites/tramite-constancia-de-egresado/constancia-egresado-info/constancia-egresado-info.component';
import { ConstanciaEgresadoTramiteComponent } from './component/tramites/tramite-constancia-de-egresado/constancia-egresado-tramite/constancia-egresado-tramite.component';
import { ConstanciaEstudiosTramiteComponent } from './component/tramites/tramite-constancia-de-estudios/constancia-estudios-tramite/constancia-estudios-tramite.component';
import { ConstanciaEstudiosInfoComponent } from './component/tramites/tramite-constancia-de-estudios/constancia-estudios-info/constancia-estudios-info.component';
import { ConstanciaPromedioTramiteComponent } from './component/tramites/tramite-constancia-de-promedio/constancia-promedio-tramite/constancia-promedio-tramite.component';
import { ConstanciaPromedioInfoComponent } from './component/tramites/tramite-constancia-de-promedio/constancia-promedio-info/constancia-promedio-info.component';
import { DragGropFilesComponent } from './component/tramites/upload-files/drag-grop-files/drag-grop-files.component';
import { ProgressComponent } from './component/tramites/upload-files/progress/progress.component';
import { DndDirective } from './directivas/dnd.directive';
import { ControlReportesTramitesComponent } from './component/admin/control-reportes-tramites/control-reportes-tramites.component';
import { EstadoTramitesComponent } from './component/admin/estado-tramites/estado-tramites.component';
import { OtrosTramitesTramiteComponent } from './component/tramites/otros-tramites/otros-tramites-tramite/otros-tramites-tramite.component';
import { OtrosTramitesInfoComponent } from './component/tramites/otros-tramites/otros-tramites-info/otros-tramites-info.component';
import { CambioHorarioInfoComponent } from './component/tramites/tramite-cambio-de-horario/cambio-horario-info/cambio-horario-info.component';
import { CambioHorarioTramiteComponent } from './component/tramites/tramite-cambio-de-horario/cambio-horario-tramite/cambio-horario-tramite.component';
import { CursosEquivalentesTramiteComponent } from './component/tramites/tramite-cursos-equivalentes/cursos-equivalentes-tramite/cursos-equivalentes-tramite.component';
import { CursosEquivalentesInfoComponent } from './component/tramites/tramite-cursos-equivalentes/cursos-equivalentes-info/cursos-equivalentes-info.component';
import { MatriculaInfoComponent } from './component/tramites/tramite-de-matricula/matricula-info/matricula-info.component';
import { MatriculaTramiteComponent } from './component/tramites/tramite-de-matricula/matricula-tramite/matricula-tramite.component';
import { ReinicioEstudiosTramiteComponent } from './component/tramites/tramite-reinicio-de-estudios/reinicio-estudios-tramite/reinicio-estudios-tramite.component';
import { ReinicioEstudiosInfoComponent } from './component/tramites/tramite-reinicio-de-estudios/reinicio-estudios-info/reinicio-estudios-info.component';
import { RegistroEstudianteComponent } from './component/seguridad/registro-estudiante/registro-estudiante.component';
import { ControlEstadoTramitesComponent } from './component/admin/control-estado-tramites/control-estado-tramites.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ResumenComponent,
    SnackComponent,
    ResetearclaveComponent,
    ConfirmarComponent,
    UserComponent,
    UsereditComponent,
    EstudianteComponent,
    EstudianteeditarComponent,
    AdministradorComponent,
    AdministradorEditarComponent,
    CarnetUInfoComponent,
    CarnetUTramiteComponent,
    ControlTramitesComponent,
    ConstanciaEgresadoInfoComponent,
    ConstanciaEgresadoTramiteComponent,
    ConstanciaEstudiosTramiteComponent,
    ConstanciaEstudiosInfoComponent,
    ConstanciaPromedioTramiteComponent,
    ConstanciaPromedioInfoComponent,
    DragGropFilesComponent,
    ProgressComponent,
    DndDirective,
    ControlReportesTramitesComponent,
    EstadoTramitesComponent,
    OtrosTramitesTramiteComponent,
    OtrosTramitesInfoComponent,
    CambioHorarioInfoComponent,
    CambioHorarioTramiteComponent,
    CursosEquivalentesTramiteComponent,
    CursosEquivalentesInfoComponent,
    MatriculaInfoComponent,
    MatriculaTramiteComponent,
    ReinicioEstudiosTramiteComponent,
    ReinicioEstudiosInfoComponent,
    RegistroEstudianteComponent,
    ControlEstadoTramitesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    routing1,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    AgmJsMarkerClustererModule,
    MatStepperModule,
    MatAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpcWweoH2IqPSGvBX91N46EsIdY-IfNiY'
    })
  ],
  // Aquí manualmente copias el componente que termina en info ya que es un diálogo
  entryComponents:[
    SnackComponent,
    ResetearclaveComponent,
    UsereditComponent,
    EstudianteeditarComponent,
    AdministradorEditarComponent,
    CarnetUInfoComponent,
    ConstanciaEgresadoInfoComponent,
    ConstanciaEstudiosInfoComponent,
    ConstanciaPromedioInfoComponent,
    CambioHorarioInfoComponent,
    MatriculaInfoComponent,
    CursosEquivalentesInfoComponent,
    OtrosTramitesInfoComponent,
    ReinicioEstudiosInfoComponent,
    RegistroEstudianteComponent
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
