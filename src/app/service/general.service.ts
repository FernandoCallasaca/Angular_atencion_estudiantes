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
}
