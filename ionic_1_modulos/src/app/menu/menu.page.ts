import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle,   IonApp,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonText, 
  IonHeader,MenuController,  IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonHeader,  IonApp,
  IonButtons,
  IonMenu,
  IonMenuButton, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class MenuPage  {

  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    /**
     * Open the menu by side
     * We can refer to the menu by side
     * here because only one "end" menu exists
     */
    this.menuCtrl.open('end');
  }
}