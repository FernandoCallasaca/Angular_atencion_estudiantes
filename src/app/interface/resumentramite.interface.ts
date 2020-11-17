export interface Tramite {
  id_tramite: 0;
  id_estudiante: 0;
  id_tipo: 0;
  nombres: '';
  apellidos: '';
  codigo: '';
  observacion: '';
  fecha: '';
  estado: '';
  tipotramite: '';
}

export interface TramiteEditar {
  tramite: Tramite;
}
