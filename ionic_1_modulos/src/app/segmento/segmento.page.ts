import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle, IonSegmentContent, IonSegmentView , IonLabel, IonSegment, IonSegmentButton , IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.page.html',
  styleUrls: ['./segmento.page.scss'],
  imports: [IonHeader, IonSegmentContent, IonSegmentView,  IonLabel, IonSegment, IonSegmentButton , IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class SegmentoPage  {

  constructor() { }

}
