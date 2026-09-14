import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraDeHerramientasPage } from './barra-de-herramientas.page';

describe('BarraDeHerramientasPage', () => {
  let component: BarraDeHerramientasPage;
  let fixture: ComponentFixture<BarraDeHerramientasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeHerramientasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
