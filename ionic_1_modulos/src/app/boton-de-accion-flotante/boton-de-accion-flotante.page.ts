import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonButton, IonToolbar, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent,
   IonFab, IonFabButton, IonIcon,  IonFabList  } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,} from 'ionicons/icons';


@Component({
  selector: 'app-boton-de-accion-flotante',
  templateUrl: './boton-de-accion-flotante.page.html',
  styleUrls: ['./boton-de-accion-flotante.page.scss'],
  imports: [IonContent, IonHeader,RouterLink, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent, 
    IonFab, IonFabButton, IonIcon, IonFabList]
})
export class BotonDeAccionFlotantePage  {

  constructor() { 
     addIcons({ add, chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe, });
  }
}
  

 


