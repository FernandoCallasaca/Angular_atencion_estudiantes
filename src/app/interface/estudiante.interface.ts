export interface Estudiante {
    id_estudiante: number;
    nombres: string;
    apellidos: string;
    dni: string;
    telefono: string;
    correo: string;
}

export interface EstudiantesEditar {
    estudiante: Estudiante;
}