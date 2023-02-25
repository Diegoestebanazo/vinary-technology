import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs//operators';
import { Aprendizaje, Estudiante } from '../models/interfaces/estudiantes.interface';


const base_url_student = 'http://20.84.54.175/IviBackendDemo/R32/EstudiantesNee/1259';
const base_url_Estrategias = 'http://20.84.54.175/IviBackendDemo/R32/GetDestrezasIndicadoresEstrategiasActividades/355/3';
const base_url_icons = 'http://20.84.54.175/IviBackendDemo/R32/GetCompetencias';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) { }

  getStudent() {
    let student: Estudiante[] = [];
    return this.http.get(base_url_student).pipe(
      map((resp: any) => {
        //console.log(resp);
        student = resp.data;
        return student;
      })
    );
  }

  getEstrategias() {
    let estrategias: Aprendizaje;
    return this.http.get<any>(base_url_Estrategias).pipe(
      map((resp: any) => {
        estrategias = resp.data.diea;
        return estrategias;
      })
    );
  }

  getIcons() {

    return this.http.get(base_url_icons);
  }
}
