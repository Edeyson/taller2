import { Component, Input, OnInit } from '@angular/core';
import { TrikiService } from '../../../services/triki.service';

@Component({
  selector: 'app-triquiplay',
  templateUrl: './triquiplay.component.html',
  styleUrls: ['./triquiplay.component.css']
})
export class TriquiplayComponent implements OnInit {
  @Input() jugadorActual: string;

  constructor(private trikiService: TrikiService) { }

  ngOnInit(): void {
    this.jugadorActual = this.trikiService.getJugadorActual();
  }



}
