import { Component, OnInit } from '@angular/core';
import { TrikiService } from '../../../services/triki.service';
import { JuegoTriquiI } from '../../../interface/juegoTriquiI';

@Component({
  selector: 'app-cantidadjuegos',
  templateUrl: './cantidadjuegos.component.html',
  styleUrls: ['./cantidadjuegos.component.css']
})
export class CantidadjuegosComponent implements OnInit {

  misJuegos: JuegoTriquiI[] = [];
  constructor(private trikiService: TrikiService) { }

  ngOnInit(): void {
    this.trikiService.getAllJuegos().subscribe(
      (succes: any) => {
        this.misJuegos = succes;
      }
    );
  }

}
