import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonText, IonButton ,IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCard,  IonCardContent,
  IonSearchbar
  
  } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashBin } from 'ionicons/icons';

@Component({
  selector: 'app-barra-de-busqueda',
  templateUrl: './barra-de-busqueda.page.html',
  styleUrls: ['./barra-de-busqueda.page.scss'],
  imports: [IonHeader, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent, IonSearchbar ]
})
export class BarraDeBusquedaPage {

  constructor() { 
     addIcons({ trashBin });
  }
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.results = this.data.filter((d) => d.toLowerCase().includes(query));
  }


}
