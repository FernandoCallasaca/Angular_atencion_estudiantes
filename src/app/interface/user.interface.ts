export interface Usuarios {
    id_usuario: number;
    nombre: string;
    contrasenia: string;
}

export interface UsuariosEditar{
    usuario: Usuarios;
}
