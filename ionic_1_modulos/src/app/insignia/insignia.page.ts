import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonText, IonButton ,IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCard,  IonCardContent,
  IonBadge, IonTabBar, IonTabButton, IonIcon
 } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart,  calendar, musicalNote } from 'ionicons/icons';


@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.page.html',
  styleUrls: ['./insignia.page.scss'],
  imports: [IonHeader, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent,
     IonBadge, IonTabBar, IonTabButton, IonIcon]
})
export class InsigniaPage  {

  constructor() { 
    addIcons({ heart, calendar, musicalNote });
  }



}
