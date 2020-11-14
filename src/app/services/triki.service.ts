import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JuegoTriquiI } from '../interface/juegoTriquiI';
import { Config } from '../../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrikiService {
  private  jugadorActual: string;
  constructor(private http: HttpClient) { }


  addJuegoTriki(juegoTriki: JuegoTriquiI): any {
    localStorage.setItem('play', JSON.stringify(juegoTriki.nombre));
    return this.http.post<JuegoTriquiI>(`${Config.baseUrl}triki/add`, {
      codigo: juegoTriki.codigo,
      nombre: juegoTriki.nombre,
      estado: juegoTriki.estado,
      fecha: juegoTriki.fecha
    }).subscribe(
      (succes: any ) => {
        console.log(succes);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  getJugadorActual(): string {
    return JSON.parse(localStorage.getItem('play'));
  }


  getAllJuegos(): any{
    return this.http.get<JuegoTriquiI[]>(`${Config.baseUrl}triki/all`);
  }
}
