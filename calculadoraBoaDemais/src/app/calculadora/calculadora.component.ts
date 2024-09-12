import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  numeroDisplay: string = '';
  numero1: number | null = null;
  numero2: number | null = null;
  operador: string | null = null;

  onNumeroPressionado(numero: string) {
    this.numeroDisplay += numero;
  }

  onOperadorPressionado(operador: string) {
    if (this.numeroDisplay) {
      this.numero1 = parseFloat(this.numeroDisplay);
      this.operador = operador;
      this.numeroDisplay = '';
    }
  }

  onResultadoPressionado() {
    if (this.numero1 !== null && this.operador !== null && this.numeroDisplay) {
      this.numero2 = parseFloat(this.numeroDisplay);
      switch (this.operador) {
        case '+':
          this.numeroDisplay = (this.numero1 + this.numero2).toString();
          break;
        case '-':
          this.numeroDisplay = (this.numero1 - this.numero2).toString();
          break;
        case '*':
          this.numeroDisplay = (this.numero1 * this.numero2).toString();
          break;
        case '/':
          this.numeroDisplay = (this.numero1 / this.numero2).toString();
          break;
      }
      this.numero1 = null;
      this.numero2 = null;
      this.operador = null;
    }
  }

  onLimpar() {
    this.numeroDisplay = '';
    this.numero1 = null;
    this.numero2 = null;
    this.operador = null;
  }

  onBackspacePressionado() {
    if (this.numeroDisplay.length > 0) {
      this.numeroDisplay = this.numeroDisplay.slice(0, -1); // Remove o último caractere
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      this.onNumeroPressionado(key);
    }

    if (key === '.') {
      this.onNumeroPressionado(key);
    }

    if (['+', '-', '*', '/'].includes(key)) {
      this.onOperadorPressionado(key);
    }

    if (key === 'Enter') {
      this.onResultadoPressionado();
    }

    if (key.toLowerCase() === 'c') {
      this.onLimpar();
    }

    if (key === 'Backspace') {
      this.onBackspacePressionado();
    }
  }
}