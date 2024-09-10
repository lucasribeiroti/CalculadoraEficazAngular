import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa o FormsModule

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TecladoComponent } from './teclado/teclado.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TecladoComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Adiciona o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
