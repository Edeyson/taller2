import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


}
