export interface Estudiante {
    gradoadaptacioncurricular1?: string;
    idestudiante?: number;
    nombreestudiante?: string;
    discapacidades?: Discapacidad[];
}

export interface Discapacidad {
    nombrediscapacidad: string;
}

export interface Aprendizaje {
    actividadesEvaluativas: string[];
    destrezasAprendizaje: Destreza[];
    estrategias: Estrategias[];
    estudiante: Student[];
    indicadoresEvaluacion: string[];
}

export interface destrezasAprendizaje {
    descripciondestrezasaprendizaje: string;

}
export interface Destreza {
    descripcion?: string;
    competencias?: Competencia[];
}

export interface Competencia {
    descripcioncompetencia: string;
    idcompetencia: number;
    imagencompetencia: string;
    checked?: boolean;
}

export interface Student {
    idpcpaprendizaje: number;
    gradoadaptacioncurricular1: string;
    idestudiante: number;
    nombreestudiante: string;
    discapacidades?: Discapacidad[];
}

export interface Estrategias {
    descripcionestrategia: string;
    idpcpaprendizaje: number;
    idpcpestrategiasaprendizaje: number;
    estrategiaActividades: EstrategiaActividades[];
    editable: boolean;
}

export interface EstrategiaActividades {
    descripcionestrategiasactividades: string;
    idestrategiasactividades: number;
    documentos: Documento[];
    enlaces: Enlace[];
    editable: boolean;
}

export interface Documento {
    idestrategiasactividadesdocumentos: number;
    idtipodocumento: number;
    urldocumento: string;
}

export interface Enlace {
    idestrategiasactividadesdocumentos: number;
    idtipodocumento: number;
    urlenlace: string;
}

export interface Icons {
    descripcioncompetencia?: string;
    idcompetencia?: number;
    imagencompetencia?: string;
}

