import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-triquiplaymodal',
  templateUrl: './triquiplaymodal.component.html',
  styleUrls: ['./triquiplaymodal.component.css']
})
export class TriquiplaymodalComponent implements OnInit {

  verificado = true;
   
  
 constructor(){}
 ngOnInit(): void {}


public registrarNombre(name:string) {
  
  if (name != "") {
    console.log(name);
    this.verificado = false;
  } else {
      this.verificado = true;
  }
  
  
}
}

