import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle, IonBreadcrumb, IonBreadcrumbs, IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';


@Component({
  selector: 'app-pan-rallado',
  templateUrl: './pan-rallado.page.html',
  styleUrls: ['./pan-rallado.page.scss'],
  imports: [IonHeader, IonBreadcrumb, IonBreadcrumbs , IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class PanRalladoPage  {
 maxBreadcrumbs? = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
