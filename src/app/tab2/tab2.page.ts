import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  multiAtual = 1;
  multiplicador = 1;
  pontosTeam1 = 0;
  placarTeam1 = 0;
  pontosTeam2 = 0;
  placarTeam2 = 0;
  constructor() {}

  Truco(valor: number) {
    this.multiplicador = valor;
  }

  menosTeam1() {
    this.pontosTeam1 -= 1 * this.multiplicador;
    if (this.pontosTeam1 <= 0) {
      this.pontosTeam1 = 0;
    }
  }

  maisTeam1() {
    this.pontosTeam1 += 1 * this.multiplicador;
    if (this.pontosTeam1 >= 12) {
      this.pontosTeam1 = 0;
      this.placarTeam1 += 1;
    } 
  }

  menosTeam2() {
    this.pontosTeam2 -= 1 * this.multiplicador;
   if (this.pontosTeam2 <= 0) {
      this.pontosTeam2 = 0;
    }
  }

  maisTeam2() {
    this.pontosTeam2 += 1 * this.multiplicador;
    if (this.pontosTeam2 >= 12) {
      this.pontosTeam2 = 0;
      this.placarTeam2 += 1;
    } 
  }

  clear() {
    this.pontosTeam1 = 0;
    this.placarTeam1 = 0;
    this.pontosTeam2 = 0;
    this.placarTeam2 = 0;

    this.multiplicador = 1;
  }
}
