import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JuegoTriquiI } from '../interface/juegoTriquiI';
import { Config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class TrikiService {
  private  jugadorActual: string;
  constructor(private http: HttpClient) { }


  addJuegoTriki(juegoTriki: JuegoTriquiI): any {
    // localStorage.setItem('triki', JSON.stringify(juegoTriki));
    this.jugadorActual = juegoTriki.nombre;
    return this.http.post<JuegoTriquiI>(Config.baseUrl + 'triki/add', {
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
    console.log(this.jugadorActual);
    return this.jugadorActual;
  }
}