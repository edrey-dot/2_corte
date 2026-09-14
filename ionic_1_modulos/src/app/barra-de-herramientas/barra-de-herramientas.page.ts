import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent,  IonProgressBar, IonHeader, IonFooter ,IonTitle, IonButton, IonToolbar, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent,} from '@ionic/angular';

@Component({
  selector: 'app-barra-de-herramientas',
  templateUrl: './barra-de-herramientas.page.html',
  styleUrls: ['./barra-de-herramientas.page.scss'],
  imports: [IonContent, IonProgressBar, IonHeader,RouterLink, IonTitle,IonFooter, IonToolbar, IonButton, CommonModule, FormsModule, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent,]
})
export class BarraDeHerramientasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
