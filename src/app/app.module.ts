import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Route} from '@angular/router';
// import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PptComponent } from './components/ppt/ppt.component';
import { ClimaComponent } from './components/clima/clima.component';
import { TriquiinicioComponent } from './components/triqui/triquiinicio/triquiinicio.component';
import { TriquiplayComponent } from './components/triqui/triquiplay/triquiplay.component';
import { TriquiplaymodalComponent } from './components/triqui/triquiplaymodal/triquiplaymodal.component';
import { NumerodeperdidasComponent } from './components/triqui/numerodeperdidas/numerodeperdidas.component';
import { CantidadjuegosComponent } from './components/triqui/cantidadjuegos/cantidadjuegos.component';
import { CampeonComponent } from './components/triqui/campeon/campeon.component';

const rutas: Route[] = [{path:'', component:InicioComponent},
                        {path:'Triqui', component:TriquiinicioComponent},
                        {path:'PPT', component:PptComponent},
                        {path:'Clima', component:ClimaComponent},
                        {path:'TriquiPlay', component:TriquiplayComponent}
                       ];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PptComponent,
    ClimaComponent,
    TriquiinicioComponent,
    TriquiplaymodalComponent,
    NumerodeperdidasComponent,
    CantidadjuegosComponent,
    CampeonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
