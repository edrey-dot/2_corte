import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanRalladoPage } from './pan-rallado.page';

describe('PanRalladoPage', () => {
  let component: PanRalladoPage;
  let fixture: ComponentFixture<PanRalladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanRalladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
