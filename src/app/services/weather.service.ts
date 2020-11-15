import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'config';
import { ClimaI } from '../interface/climaI';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '111136ef1b7bbb69a4e7e39d80479c7a';
  URI = 'http://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {
  }

  public getWeather(ciudad: string): any{
      return this.http.get(`${this.URI}${ciudad}&appid=${this.apiKey}`);
  }


  public guardarDatos(nombre: string, c: string, f: string): any {
    return this.http.post(`${Config.baseUrl}clima/add`, {
      usuario: nombre,
      fecha: f,
      ciudad: c,
    }).subscribe(
      (succes: any ) => {
        console.log(succes);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  public getAll(): any {
    return this.http.get<ClimaI[]>(`${Config.baseUrl}clima/all`);
  }


}
