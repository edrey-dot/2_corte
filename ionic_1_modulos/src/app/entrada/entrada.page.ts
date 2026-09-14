import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle, IonInputPasswordToggle, IonItem, IonList, IonInput, IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
  imports: [IonHeader, IonItem, IonList, IonInputPasswordToggle,   IonInput, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class EntradaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
