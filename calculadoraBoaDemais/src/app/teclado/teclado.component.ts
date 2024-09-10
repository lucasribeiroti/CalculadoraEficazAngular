import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent {
  @Output() numeroPressionado = new EventEmitter<string>();
  @Output() operadorPressionado = new EventEmitter<string>();
  @Output() resultadoPressionado = new EventEmitter<void>();
  @Output() limparPressionado = new EventEmitter<void>();

  onNumeroClick(valor: string): void {
    this.numeroPressionado.emit(valor);
  }

  onOperadorClick(operador: string): void {
    this.operadorPressionado.emit(operador);
  }

  onResultadoClick(): void {
    this.resultadoPressionado.emit();
  }

  onLimparClick(): void {
    this.limparPressionado.emit();
  }
}