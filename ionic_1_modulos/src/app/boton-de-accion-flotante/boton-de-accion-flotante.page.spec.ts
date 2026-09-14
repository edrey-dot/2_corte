import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonDeAccionFlotantePage } from './boton-de-accion-flotante.page';

describe('BotonDeAccionFlotantePage', () => {
  let component: BotonDeAccionFlotantePage;
  let fixture: ComponentFixture<BotonDeAccionFlotantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDeAccionFlotantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
