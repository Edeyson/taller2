import { Component, Input, OnInit } from '@angular/core';
import { JuegoTriquiI } from 'src/app/interface/juegoTriquiI';
import { TrikiService } from '../../../services/triki.service';

@Component({
  selector: 'app-triquiplay',
  templateUrl: './triquiplay.component.html',
  styleUrls: ['./triquiplay.component.css'],
})
export class TriquiplayComponent implements OnInit {

  public play;
  public juego: JuegoTriquiI = {
    nombre: "",
    codigo: 0,
    estado: false,
    fecha: ""
  };
  public state = "E";
  public estadoVista = "--";

  dehabilitarTablero = false;
  constructor(private trikiService: TrikiService) { }

  tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  ngOnInit(): void {
    this.play = this.trikiService.getJuegoActual();
    this.juego.nombre = this.play.nombre;
    this.juego.codigo = this.play.codigo;
    this.juego.estado = this.play.estado;
    this.juego.fecha = this.play.fecha;
  }

  public terminar(): any {
    console.log(this.tablero);

    if (this.state === "X") {
      this.juego.estado = true;
      this.estadoVista = "Ganó: " + this.juego.estado;
    } else {
      if (this.state === "O") {
        this.juego.estado = false;
        this.estadoVista = "Gano: " + this.juego.estado;
      } else {
        if (this.state === "E") {
          this.juego.estado = false;
          this.estadoVista = "Empate: " + true;
        }
      }
    }
    this.trikiService.addJuegoTriki(this.juego);
  }



  private invalidarTablero() {
    this.dehabilitarTablero = true;
  }

  private verificarGanador() {
    let letra = this.verificarGanador00();
    if (letra !== "E" && letra !== "") {
      if (letra === "X") {
        document.getElementById("state").innerHTML = "Usted Ganó";
        this.state = "X"
        this.invalidarTablero();
        return;
      } else {
        document.getElementById("state").innerHTML = "Ganó la maquina";
        this.state = "O"
        this.invalidarTablero();
        return;
      }
    } else {
      letra = this.verificarGanador01();
      if (letra !== "E" && letra !== "") {
        if (letra === "X") {
          document.getElementById("state").innerHTML = "Usted Ganó";
          this.state = "X"
          this.invalidarTablero();
          return;
        } else {
          document.getElementById("state").innerHTML = "Ganó la maquina";
          this.state = "O"
          this.invalidarTablero();
          return;
        }
      } else {
        letra = this.verificarGanador02();
        if (letra !== "E" && letra !== "") {
          if (letra === "X") {
            document.getElementById("state").innerHTML = "Usted Ganó";
            this.state = "X"
            this.invalidarTablero();
            return;
          } else {
            document.getElementById("state").innerHTML = "Ganó la maquina";
            this.state = "O"
            this.invalidarTablero();
            return;
          }
        } else {
          letra = this.verificarGanador20();
          if (letra !== "E" && letra !== "") {
            if (letra === "X") {
              document.getElementById("state").innerHTML = "Usted Ganó";
              this.state = "X"
              this.invalidarTablero();
              return;
            } else {
              document.getElementById("state").innerHTML = "Ganó la maquina";
              this.state = "O"
              this.invalidarTablero();
              return;
            }
          } else {
            letra = this.verificarGanador10();
            if (letra !== "E" && letra !== "") {
              if (letra === "X") {
                document.getElementById("state").innerHTML = "Usted Ganó";
                this.state = "X"
                this.invalidarTablero();
                return;
              } else {
                document.getElementById("state").innerHTML = "Ganó la maquina";
                this.state = "O"
                this.invalidarTablero();
                return;
              }
            } else {
              document.getElementById("state").innerHTML = "Empate";
            }
          }
        }
      }
    }

  }



  private verificarGanador00() {
    let letra = this.tablero[0][0];
    if (this.tablero[0][1] === letra && this.tablero[0][2] === letra) {
      return letra;
    } else {
      if (this.tablero[1][1] === letra && this.tablero[2][2] === letra) {
        return letra;
      } else {
        if (this.tablero[1][0] === letra && this.tablero[2][0] === letra) {
          return letra;
        }
      }
    }
    return "E";
  }

  private verificarGanador01() {
    let letra = this.tablero[0][1];
    if (this.tablero[1][1] === letra && this.tablero[2][1] === letra) {
      return letra;
    }
    return 'E';
  }

  private verificarGanador02() {
    let letra = this.tablero[0][2];
    if (this.tablero[1][1] === letra && this.tablero[2][0] === letra) {
      return letra;
    } else {
      if (this.tablero[1][2] === letra && this.tablero[2][2] === letra) {
        return letra;
      }
    }
    return "E";
  }


  private verificarGanador20() {
    let letra = this.tablero[2][0];
    if (this.tablero[2][1] === letra && this.tablero[2][2] === letra) {
      return letra;
    }
    return 'E';
  }
  private verificarGanador10() {
    let letra = this.tablero[1][0];
    if (this.tablero[1][1] === letra && this.tablero[1][2] === letra) {
      return letra;
    }
    return 'E';
  }



  // botones primera fila

  public boton00() {
    if (this.tablero[0][0] === '') {
      this.tablero[0][0] = 'X';
      document.getElementById('cell-0-0').innerHTML = this.tablero[0][0];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }
  public boton01() {
    if (this.tablero[0][1] === '') {
      this.tablero[0][1] = 'X';
      document.getElementById('cell-0-1').innerHTML = this.tablero[0][1];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }
  public boton02() {
    if (this.tablero[0][2] === '') {
      this.tablero[0][2] = 'X';
      document.getElementById('cell-0-2').innerHTML = this.tablero[0][2];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }

  // botones segunda fila

  public boton10() {
    if (this.tablero[1][0] === '') {
      this.tablero[1][0] = 'X';
      document.getElementById('cell-1-0').innerHTML = this.tablero[1][0];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }
  public boton11() {
    if (this.tablero[1][1] === '') {
      this.tablero[1][1] = 'X';
      document.getElementById('cell-1-1').innerHTML = this.tablero[1][1];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }

  public boton12() {
    if (this.tablero[1][2] === '') {
      this.tablero[1][2] = 'X';
      document.getElementById('cell-1-2').innerHTML = this.tablero[1][2];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }


  // botones tercera fila

  public boton20() {
    if (this.tablero[2][0] === '') {
      this.tablero[2][0] = 'X';
      document.getElementById('cell-2-0').innerHTML = this.tablero[2][0];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }

  public boton21() {
    if (this.tablero[2][1] === '') {
      this.tablero[2][1] = 'X';
      document.getElementById('cell-2-1').innerHTML = this.tablero[2][1];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }

  public boton22() {
    if (this.tablero[2][2] === '') {
      this.tablero[2][2] = 'X';
      document.getElementById('cell-2-2').innerHTML = this.tablero[2][2];
      console.log(this.tablero);
      this.juegoMaquina();
    }

  }


  // juego de la maquina

  private juegoMaquina() {
    var fila = Math.floor(Math.random() * (2 - 0) + 0);
    var columna = Math.floor(Math.random() * (2 - 0) + 0);
    if (this.tablero[fila][columna] === '') {
      this.tablero[fila][columna] = 'O';
      document.getElementById(
        'cell-' + fila + '-' + columna
      ).innerHTML = this.tablero[fila][columna];
    } else {
      if (this.tablero[0][0] === '') {
        this.tablero[0][0] = 'O';
        document.getElementById('cell-0-0').innerHTML = this.tablero[0][0];
      } else {
        if (this.tablero[0][1] === '') {
          this.tablero[0][1] = 'O';
          document.getElementById('cell-0-1').innerHTML = this.tablero[0][1];
        } else {
          if (this.tablero[0][2] === '') {
            this.tablero[0][2] = 'O';
            document.getElementById('cell-0-2').innerHTML = this.tablero[0][2];
          } else {
            if (this.tablero[1][0] === '') {
              this.tablero[1][0] = 'O';
              document.getElementById(
                'cell-1-0'
              ).innerHTML = this.tablero[1][0];
            } else {
              if (this.tablero[1][1] === '') {
                this.tablero[1][1] = 'O';
                document.getElementById(
                  'cell-1-1'
                ).innerHTML = this.tablero[1][1];
              } else {
                if (this.tablero[1][2] === '') {
                  this.tablero[1][2] = 'O';
                  document.getElementById(
                    'cell-1-2'
                  ).innerHTML = this.tablero[1][2];
                } else {
                  if (this.tablero[2][0] === '') {
                    this.tablero[2][0] = 'O';
                    document.getElementById(
                      'cell-2-0'
                    ).innerHTML = this.tablero[2][0];
                  } else {
                    if (this.tablero[2][1] === '') {
                      this.tablero[2][1] = 'O';
                      document.getElementById(
                        'cell-2-1'
                      ).innerHTML = this.tablero[2][1];
                    } else {
                      if (this.tablero[2][2] === '') {
                        this.tablero[2][2] = 'O';
                        document.getElementById(
                          'cell-2-2'
                        ).innerHTML = this.tablero[2][2];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    this.verificarGanador();
  }
}
