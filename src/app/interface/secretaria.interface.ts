export interface Secretaria {
  id_administrador: number;
  id_usuario: number;
  nombres: string;
  apellidos: string;
  direccion: string;
}

export interface SecretariaEditar {
  secretaria: Secretaria;
}
