export interface Estudiante {
    id_estudiante: number;
    id_usuario: number;
    nombres: string;
    apellidos: string;
    codigo: string;
}

export interface EstudiantesEditar {
    estudiante: Estudiante;
}
