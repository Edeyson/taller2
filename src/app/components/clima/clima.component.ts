import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }


  getWeather(ciudad: string): any {
    this.weatherService.getWeather(ciudad)
    .subscribe(
      (acces: any) => {
        console.log(acces);
        this.weather = acces;
      },
    );
  }


  submitLocation(ciudad: HTMLInputElement): any{
      this.getWeather(ciudad.value);
      ciudad.focus();
      return false;
  }


  public guardarDatos(usuario: HTMLInputElement, ciudad: HTMLInputElement): any{
    const fecha = this.getDateTime();
    this.weatherService.guardarDatos(usuario.value, ciudad.value, fecha);
    usuario.value = '';
    ciudad.value = '';
  }


  private getDateTime(): any {
    const date = new Date();

    const hour = date.getHours();
    const h = (hour < 10 ? '0' : '') + hour;

    const min = date.getMinutes();
    const m = (min < 10 ? '0' : '') + min;

    const sec = date.getSeconds();
    const s = (sec < 10 ? '0' : '') + sec;

    const year = date.getFullYear();

    const month = date.getMonth() + 1;
    const mes = (month < 10 ? '0' : '') + month;

    const day = date.getDate();
    const dia = (day < 10 ? '0' : '') + day;

    return year + ':' + mes + ':' + dia + ':' + h + ':' + m + ':' + s;

}

}
