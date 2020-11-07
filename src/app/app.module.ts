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
import { InformacionTramiteComponent } from './component/informacion-tramite/informacion-tramite.component';
import { TramitePracticasComponent } from './component/tramite-practicas/tramite-practicas.component';
import { MenuPrincipalComponent } from './component/menu-principal/menu-principal.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorEditarComponent } from './component/administrador-editar/administrador-editar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioEditarComponent } from './component/usuario-editar/usuario-editar.component';

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
    InformacionTramiteComponent,
    TramitePracticasComponent,
    MenuPrincipalComponent,
    AdministradorComponent,
    AdministradorEditarComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
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
  entryComponents:[
    SnackComponent,
    ResetearclaveComponent,
    UsereditComponent,
    EstudianteeditarComponent,
    AdministradorEditarComponent,
    UsuarioEditarComponent
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
