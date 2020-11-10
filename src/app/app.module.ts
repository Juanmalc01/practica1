import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { AltaEventosComponent } from './alta-eventos/alta-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';
import { EliminarEventosComponent } from './eliminar-eventos/eliminar-eventos.component';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { BannerComponent } from './banner/banner.component';
import { ListaMiembrosComponent } from './quien-somos/lista-miembros/lista-miembros.component';
import { DetallesMiembrosComponent } from './quien-somos/detalles-miembros/detalles-miembros.component';
import { ElementoMiembroComponent } from './quien-somos/elemento-miembro/elemento-miembro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EventosComponent,
    AltaEventosComponent,
    ModificarEventosComponent,
    EliminarEventosComponent,
    QuienSomosComponent,
    BannerComponent,
    ListaMiembrosComponent,
    DetallesMiembrosComponent,
    ElementoMiembroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
