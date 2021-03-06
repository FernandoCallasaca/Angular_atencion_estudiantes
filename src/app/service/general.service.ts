import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { AppSettings } from '../common/appsettings';

@Injectable()
export class GeneralService {


  public url: String;
  public credentials: any;
  public basic: any;


  constructor(public _http: HttpClient) {
      this.url = AppSettings.URL;
  }


  getEstudiante(token): Observable<any> {
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      });
      return this._http.post(this.url + 'general/getestudiante', {}, { headers: reqHeader });
  }

  deleteEstudiante(data, token): Observable<any> {
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      });
      console.log(data)
      return this._http.post(this.url + 'general/deleteestudiante', data, { headers: reqHeader });
  }

  saveEstudiante(data, token): Observable<any> {
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      });
      console.log(data)
      return this._http.post(this.url + 'general/saveestudiante', data, { headers: reqHeader });
  }
  getAdministrador(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getadministrador', {}, { headers: reqHeader });
  }
  getSecretaria(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getsecretaria', {}, { headers: reqHeader });
  }

  deleteAdministrador(data, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    console.log(data)
    return this._http.post(this.url + 'general/deleteadministrador', data, { headers: reqHeader });
  }

  saveAdministrador(data, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    console.log(data)
    return this._http.post(this.url + 'general/saveadministrador', data, { headers: reqHeader });
  }
  getUsuario(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getusuario', {}, { headers: reqHeader });
  }

  deleteUsuario(data, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    console.log(data)
    return this._http.post(this.url + 'general/deleteusuario', data, { headers: reqHeader });
  }

  saveUsuario(data, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    console.log(data)
    return this._http.post(this.url + 'general/saveusuario', data, { headers: reqHeader });
  }

  getTipoTramite(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/gettipotramite', {}, { headers: reqHeader });
  }

  getVwTramites(request,token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getvwtramites', request, { headers: reqHeader });
  }

  getInfoEstudianteUsuario(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getinfoestudianteusuario', {}, { headers: reqHeader });
  }

  getEstadoTramite(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getestadostramite', {}, { headers: reqHeader });
  }

  getVwEstadoTramites(request,token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getvwestadotramites', request, { headers: reqHeader });
  }

  getUsuariosForRegister(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getusuarioforregister', {}, { headers: reqHeader });
  }

  saveUsuarioForRegister(request,token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/saveusuarioforregister', request, { headers: reqHeader });
  }

  saveEstudianteForRegister(request,token): Observable<any> {
  var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
  });
  return this._http.post(this.url + 'general/saveestudianteforregister', request, { headers: reqHeader });
  }

  saveTramite(request, token): Observable<any> {
  var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
  });
  return this._http.post(this.url + 'general/savetramite', request, { headers: reqHeader });
  }

  saveDocumentoTramite(request, token): Observable<any> {
  var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
  });
  return this._http.post(this.url + 'general/savedocumentotramite', request, { headers: reqHeader });
  }

  uploadfile(extension, documento, fileToUpload, token): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('DA', fileToUpload, fileToUpload.name);
    return this._http.post(this.url + 'general/uploadfile?extension=' + extension + '&documento=' + documento, formData);
  }

  getDocumentos(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getdocumentos', {}, { headers: reqHeader });
  }

  download(nombre): Observable<any> {
    return this._http.get(this.url + 'general/download?nombre=' + nombre, { responseType: 'blob' });
  }

  get_tipo_tramite_estado(request, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getipotramiteestado', request, { headers: reqHeader });
    }

  getEstadoTramiteValue(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getestadotramite', {}, { headers: reqHeader });
  }
  setEstadoObservacionAdminTramite(request, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/setestadoobservacionadmintramite', request, { headers: reqHeader });
  }
  saveConsulta(request,token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/saveconsulta', request, { headers: reqHeader });
  }
  getControlEstamosTramite(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getcontrolestamostramite', {}, { headers: reqHeader });
  }
  getConsultas(request, token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getconsultas', request, { headers: reqHeader });
  }
  getTramitesInformativos(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/gettramitesinformativos', {}, { headers: reqHeader });
  }
  getEnlacesSesiones(token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/getenlacessesiones', {}, { headers: reqHeader });
  }
  getTramiteEntreFechas(req,token): Observable<any> {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    return this._http.post(this.url + 'general/gettramiteentrefechas', req, { headers: reqHeader });
}
}
