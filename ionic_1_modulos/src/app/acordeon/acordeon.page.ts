import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonText,IonAccordion, IonAccordionGroup,  IonItem, IonLabel,  IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCard,  IonCardContent  } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.page.html',
  styleUrls: ['./acordeon.page.scss'],
  imports: [IonContent, RouterLink, IonText, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCard,  IonCardContent]
})
export class AcordeonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
