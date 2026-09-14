import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {  IonTitle, IonIcon , IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';
import { home, star, trash } from 'ionicons/icons';

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.page.html',
  styleUrls: ['./iconos.page.scss'],
  imports: [IonHeader, IonIcon , IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class IconosPage  {

  constructor() {
    addIcons({ home, star, trash });
  }
}
