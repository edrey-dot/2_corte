import { Component, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent,  IonPopover, IonHeader, IonTitle, IonButton, IonToolbar, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent  } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  imports: [IonContent, IonPopover, IonHeader,RouterLink, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, IonText, IonCardHeader, IonCardTitle, IonCard,  IonCardContent]
})
export class PopoverPage {

  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}