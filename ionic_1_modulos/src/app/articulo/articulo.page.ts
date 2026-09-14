import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle,IonAvatar, IonIcon,  IonList, IonItem, IonLabel, IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
  imports: [IonHeader, IonAvatar, IonIcon,  IonList,  IonItem, IonLabel, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class ArticuloPage  {

  constructor() {
    addIcons({ airplane, bluetooth, call, wifi });
   }



}
