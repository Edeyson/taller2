import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})


export class PptComponent implements OnInit {

  ruta1 = '../../../assets/misterio.png';
  ruta2 = '../../../assets/misterio.png';

  constructor() { }

  ngOnInit(): void {
  }
  public jugar(){
   this.player1();
   this.player2();
   
  }

  public player1(){
    var jugador1 = Math.floor(Math.random() * (3 - 0) + 0);
    console.log("1: ",jugador1);
    if(jugador1===0){
      this.ruta1= "../../../assets/rock.png";
    }else{
      if(jugador1===1){
        this.ruta1 = "../../../assets/paper.png";
      }else{
        if(jugador1===2){
          this.ruta1 = "../../../assets/scissor.png";
        }
      }
    }
  }

  public player2(){
    var jugador2 = Math.floor(Math.random() * (3 - 0) + 0);
    console.log("2: ",jugador2);
    if(jugador2===0){
      this.ruta2 = "../../../assets/rock.png";
    }else{
      if(jugador2===1){
        this.ruta2 = "../../../assets/paper.png";
      }else{
        if(jugador2===2){
          this.ruta2 = "../../../assets/scissor.png";
        }
      }
    }
  }
  
 
}
