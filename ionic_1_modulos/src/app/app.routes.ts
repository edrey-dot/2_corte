import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'barra-de-busqueda',
    loadComponent: () => import('./barra-de-busqueda/barra-de-busqueda.page').then( m => m.BarraDeBusquedaPage)
  },
  {
    path: 'insignia',
    loadComponent: () => import('./insignia/insignia.page').then( m => m.InsigniaPage)
  },
  {
    path: 'alerta',
    loadComponent: () => import('./alerta/alerta.page').then( m => m.AlertaPage)
  },
  {
    path: 'pan-rallado',
    loadComponent: () => import('./pan-rallado/pan-rallado.page').then( m => m.PanRalladoPage)
  },
  {
    path: 'boton',
    loadComponent: () => import('./boton/boton.page').then( m => m.BotonPage)
  },
  {
    path: 'tarjeta',
    loadComponent: () => import('./tarjeta/tarjeta.page').then( m => m.TarjetaPage)
  },
  {
    path: 'casilla',
    loadComponent: () => import('./casilla/casilla.page').then( m => m.CasillaPage)
  },
  {
    path: 'fecha-y-hora',
    loadComponent: () => import('./fecha-y-hora/fecha-y-hora.page').then( m => m.FechaYHoraPage)
  },
  {
    path: 'iconos',
    loadComponent: () => import('./iconos/iconos.page').then( m => m.IconosPage)
  },
  {
    path: 'entrada',
    loadComponent: () => import('./entrada/entrada.page').then( m => m.EntradaPage)
  },
  {
    path: 'articulo',
    loadComponent: () => import('./articulo/articulo.page').then( m => m.ArticuloPage)
  },
  {
    path: 'lista',
    loadComponent: () => import('./lista/lista.page').then( m => m.ListaPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'palanca',
    loadComponent: () => import('./palanca/palanca.page').then( m => m.PalancaPage)
  },
  {
    path: 'segmento',
    loadComponent: () => import('./segmento/segmento.page').then( m => m.SegmentoPage)
  },
  {
    path: 'acordeon',
    loadComponent: () => import('./acordeon/acordeon.page').then( m => m.AcordeonPage)
  },
  {
    path: 'boton-de-accion-flotante',
    loadComponent: () => import('./boton-de-accion-flotante/boton-de-accion-flotante.page').then( m => m.BotonDeAccionFlotantePage)
  },
  {
    path: 'rango',
    loadComponent: () => import('./rango/rango.page').then( m => m.RangoPage)
  },
  {
    path: 'barra-de-herramientas',
    loadComponent: () => import('./barra-de-herramientas/barra-de-herramientas.page').then( m => m.BarraDeHerramientasPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./popover/popover.page').then( m => m.PopoverPage)
  },
];