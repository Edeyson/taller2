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
      ciudad.value = '';
      ciudad.focus();
      return false;
  }

}
