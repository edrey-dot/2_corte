
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonList,
  IonLabel
} from '@ionic/angular';

interface Operacion {
  num1: number;
  num2: number;
  operador: string;
  resultado: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    FormsModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonItem,
    IonInput,

    IonSelect,
    IonSelectOption,

    IonButton,

    IonList,
    IonLabel
  ]
})
export class Tab1Page {

  num1: number = 0;
  num2: number = 0;

  operador: string = '+';

  resultado: number | null = null;

  historial: Operacion[] = [];

  constructor() {}

  calcular() {

    let res = 0;

    switch (this.operador) {

      case '+':
        res = this.num1 + this.num2;
        break;

      case '-':
        res = this.num1 - this.num2;
        break;

      case '*':
        res = this.num1 * this.num2;
        break;

      case '/':
        if (this.num2 === 0) {
          alert('No se puede dividir entre 0');
          return;
        }

        res = this.num1 / this.num2;
        break;
    }

    this.resultado = res;

    // Guardar la operación en el historial
    this.historial.unshift({
      num1: this.num1,
      num2: this.num2,
      operador: this.operador,
      resultado: res
    });
  }

  limpiarHistorial() {
    this.historial = [];
  }
}
