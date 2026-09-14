import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraDeBusquedaPage } from './barra-de-busqueda.page';

describe('BarraDeBusquedaPage', () => {
  let component: BarraDeBusquedaPage;
  let fixture: ComponentFixture<BarraDeBusquedaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
