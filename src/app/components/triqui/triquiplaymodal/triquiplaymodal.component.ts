import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JuegoTriquiI } from '../../../interface/juegoTriquiI';

@Component({
  selector: 'app-triquiplaymodal',
  templateUrl: './triquiplaymodal.component.html',
  styleUrls: ['./triquiplaymodal.component.css'],
})
export class TriquiplaymodalComponent implements OnInit {
  verificado = true;

  juegoTriqui: JuegoTriquiI;
  form: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required])
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

  public acceder(name: string): any {
   this.juegoTriqui = this.form.value;
   this.juegoTriqui.codigo = 123;
   console.log(this.juegoTriqui);
  }
}
