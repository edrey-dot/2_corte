import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle, IonDatetime , IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-fecha-y-hora',
  templateUrl: './fecha-y-hora.page.html',
  styleUrls: ['./fecha-y-hora.page.scss'],
  imports: [IonHeader, IonDatetime , IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class FechaYHoraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
