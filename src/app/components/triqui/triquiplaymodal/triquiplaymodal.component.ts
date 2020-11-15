import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JuegoTriquiI } from '../../../interface/juegoTriquiI';
import { TrikiService } from '../../../services/triki.service';

@Component({
  selector: 'app-triquiplaymodal',
  templateUrl: './triquiplaymodal.component.html',
  styleUrls: ['./triquiplaymodal.component.css'],
})
export class TriquiplaymodalComponent implements OnInit {
  verificado = true;

  public juegoTriqui: JuegoTriquiI;
  public form: FormGroup;

  constructor(private triquiService: TrikiService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(null, [Validators.required])
    });
  }

  public registrarNombre(name: string): any {
    if (name !== '') {
      console.log(name);
      this.verificado = false;
    } else {
      this.verificado = true;
    }
  }


  public acceder(): void {
    this.juegoTriqui = this.form.value;
    this.juegoTriqui.codigo = this.getCode();
    this.juegoTriqui.estado = false;
    this.juegoTriqui.fecha = this.getDateTime();
    this.triquiService.addJuegoTrikiLocal(this.juegoTriqui);
  }
getCode(): any {
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

    return year+ mes + dia + h+ m + s;

}


  getDateTime(): any {
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
