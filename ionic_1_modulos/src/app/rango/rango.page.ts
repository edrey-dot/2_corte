import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonRange , IonHeader, IonTitle, IonButton, IonToolbar, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { snowOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-rango',
  templateUrl: './rango.page.html',
  styleUrls: ['./rango.page.scss'],
  imports: [IonContent, IonIcon, IonRange , IonHeader,RouterLink, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent, ]
})
export class RangoPage  {

  constructor() {
    addIcons({ snowOutline, sunnyOutline });
   }

  
}
