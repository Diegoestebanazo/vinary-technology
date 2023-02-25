import { Component, OnInit } from '@angular/core';
import { Aprendizaje, Destreza, Estudiante, Icons } from '../../models/interfaces/estudiantes.interface';
import { ApisService } from '../../service/apis.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  /* VARIABLES */

  estudiantes: Estudiante[] = [];

  destreza: Destreza[] = [{
    descripcion: 'M.4.1.5. Calcular la potencia de números enteros con exponentes naturales. Principales ocupaciones y profesiones que observa en el entorno, así como la forma en que estos aspectos.',
    competencias: [{ descripcioncompetencia: "Competencias Comunicaciones", idcompetencia: 1, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c1.png", checked: true },
    { descripcioncompetencia: "Competencias Digitales", idcompetencia: 2, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c2.png", checked: true },
    { descripcioncompetencia: "Competencias Matemáticas", idcompetencia: 3, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c3.png", checked: false },
    { descripcioncompetencia: "Competencias Socioemocionales", idcompetencia: 4, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c4.png", checked: false }]
  }, {
    descripcion: 'M.4.3.3. La potencia de números enteros con exponentes naturales. Principales ocupaciones y profesiones que observa en el entorno, así como la forma en que estos aspectos.',
    competencias: [{ descripcioncompetencia: "Competencias Comunicaciones", idcompetencia: 1, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c1.png", checked: false },
    { descripcioncompetencia: "Competencias Digitales", idcompetencia: 2, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c2.png", checked: false },
    { descripcioncompetencia: "Competencias Matemáticas", idcompetencia: 3, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c3.png", checked: true },
    { descripcioncompetencia: "Competencias Socioemocionales", idcompetencia: 4, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c4.png", checked: false }]
  }, {
    descripcion: 'M.4.3.8. La potencia de números enteros con exponentes naturales. Principales ocupaciones y profesiones que observa en el entorno, así como la forma en que estos aspectos.',
    competencias: [{ descripcioncompetencia: "Competencias Comunicaciones", idcompetencia: 1, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c1.png", checked: true },
    { descripcioncompetencia: "Competencias Digitales", idcompetencia: 2, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c2.png", checked: true },
    { descripcioncompetencia: "Competencias Matemáticas", idcompetencia: 3, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c3.png", checked: true },
    { descripcioncompetencia: "Competencias Socioemocionales", idcompetencia: 4, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c4.png", checked: true }
    ]
  }];
  isEdit: boolean[] = [];
  aprendizaje!: Aprendizaje;




  /* INPUTS */
  selectStudent?: Estudiante;
  filterPost = '';
  selectDestreza?: Destreza[] = [];



  constructor(private api: ApisService) {
  }

  ngOnInit(): void {
    this.api.getStudent().subscribe((data: Estudiante[]) => {
      //console.log('Estudiantes');
      this.estudiantes = data;
      console.log(data);
      this.estudiantes
    });
    this.api.getEstrategias().subscribe((data: Aprendizaje) => {
      console.log('Estrategias');
      this.aprendizaje = data;

      console.log(data);
    });
    this.api.getIcons().subscribe((data: any) => {
      console.log('LOL');
      console.log(data);
    });
  }

  /* AGREGA DESTREZA */
  addDestreza(destreza: Destreza) {
    this.selectDestreza?.push(destreza);
    console.log(this.selectDestreza);
  }

  /* AGREGA DESTREZA CON CAMPOS LIMPIOS */
  addDestrezaClean() {
    this.selectDestreza!.push({
      descripcion: '', competencias: [{ descripcioncompetencia: "Competencias Comunicaciones", idcompetencia: 1, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c1.png", checked: false },
      { descripcioncompetencia: "Competencias Digitales", idcompetencia: 2, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c2.png", checked: false },
      { descripcioncompetencia: "Competencias Matemáticas", idcompetencia: 3, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c3.png", checked: false },
      { descripcioncompetencia: "Competencias Socioemocionales", idcompetencia: 4, imagencompetencia: "https://ivistorage.blob.core.windows.net/file-container/c4.png", checked: false }]
    });
  }

  /* EDITA DESTREZA */
  editDestreza(index: number) {
    let input: any = document.getElementById('input-' + index);
    if (input.disabled) {
      input.disabled = false;
      this.isEdit[index] = true;
    } else {
      input.disabled = true;
      this.isEdit[index] = false;
      this.selectDestreza![index].descripcion = input.value;
    }
    console.log(this.selectDestreza);
  }

  /* ELIMINA DESTREZA */
  deleteDestreza(index: number) {
    this.selectDestreza?.splice(index, 1);
    console.log(this.selectDestreza);
  }

  /* EDITA ESTRATEGIA */
  editEstrategia(index: number) {
    let input: any = document.getElementById('input-estrategia-' + index);
    if (input.disabled) {
      input.disabled = false;
      this.aprendizaje.estrategias[index].editable = true;
    } else {
      input.disabled = true;
      this.aprendizaje.estrategias[index].editable = false;
      this.aprendizaje.estrategias[index].descripcionestrategia = input.value;
    }
    console.log(this.aprendizaje);
  }

  /* ELIMINA ESTRATEGIA */
  deleteEstrategia(index: number) {
    this.aprendizaje.estrategias.splice(index, 1);
    console.log(this.aprendizaje);
  }

  /* AGREGA ESTRATEGIA */
  addEstrategia() {
    this.aprendizaje.estrategias.push({
      descripcionestrategia: '', idpcpaprendizaje: 0,
      estrategiaActividades: [], idpcpestrategiasaprendizaje: 0, editable: false
    });
  }

  /* AGREGA ACTIVIDAD */
  addActividad(index: number) {
    this.aprendizaje.estrategias[index].estrategiaActividades.push({
      descripcionestrategiasactividades: '', idestrategiasactividades: 0, documentos: [], enlaces: [], editable: false
    });
  }

  /* EDITA ACTIVIDAD */
  editActividad(index: number, index2: number) {
    let input: any = document.getElementById('input-actividad-' + index + '-' + index2);
    if (input.disabled) {
      input.disabled = false;
      this.aprendizaje.estrategias[index].estrategiaActividades[index2].editable = true;
    } else {
      input.disabled = true;
      this.aprendizaje.estrategias[index].estrategiaActividades[index2].editable = false;
      this.aprendizaje.estrategias[index].estrategiaActividades[index2].descripcionestrategiasactividades = input.value;
    }
    console.log(this.aprendizaje);
  }

  /* ELIMINA ACTIVIDAD */
  deleteActividad(index: number, index2: number) {
    this.aprendizaje.estrategias[index].estrategiaActividades.splice(index2, 1);
    console.log(this.aprendizaje);
  }

  /* AGREGA ARCHIVO */
  loadInput(event: any, index: number, index2: number) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      console.log(file);
      this.aprendizaje.estrategias[index].estrategiaActividades[index2].documentos.push({
        idestrategiasactividadesdocumentos: 0, urldocumento: file.name, idtipodocumento: 0
      });
      console.log(this.aprendizaje);
      reader.onload = (event: any) => {
        event.target.result;
      }
      //this.fileImage = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  /* AGREGA ENLACE */
  addEnlace(index: number, index2: number) {
    let input: any = document.getElementById('enlace-' + index + '-' + index2);
    this.aprendizaje.estrategias[index].estrategiaActividades[index2].enlaces.push({
      idestrategiasactividadesdocumentos: 0, urlenlace: input.value, idtipodocumento: 0
    });
    input.value = '';
    console.log(this.aprendizaje);
  }

  /* ELIMINA EL ARCHIVO */
  deleteFile(index: number, index2: number, index3: number) {
    this.aprendizaje.estrategias[index].estrategiaActividades[index2].documentos.splice(index3, 1);
    console.log(this.aprendizaje);
  }

  /* ELIMINA EL ENLACE */
  deleteEnlace(index: number, index2: number, index3: number) {
    this.aprendizaje.estrategias[index].estrategiaActividades[index2].enlaces.splice(index3, 1);
    console.log(this.aprendizaje);
  }

}

