import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {  IonTitle, IonToggle , IonText, IonHeader, IonToolbar, IonButton , IonContent, IonCardHeader, IonCardTitle, IonCard,  IonCardContent } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-palanca',
  templateUrl: './palanca.page.html',
  styleUrls: ['./palanca.page.scss'],
  imports: [IonHeader, ReactiveFormsModule, IonToggle , IonText, IonButton, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, RouterLink,  IonCardContent]
})
export class PalancaPage {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      wifi: [true, Validators.requiredTrue],
    });
  }

  onChange() {
    // Mark the control as touched to trigger the error message
    // without requiring the toggle to be blurred first
    this.myForm.get('wifi')!.markAsTouched();
  }
}
