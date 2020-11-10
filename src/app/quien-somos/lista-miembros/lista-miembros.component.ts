import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { miembro } from '../miembro';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {

  miembro = [new miembro(), new miembro(), new miembro(), new miembro(), new miembro()];
  @Output() informarEvent = new EventEmitter<miembro>();

  constructor() { }

  ngOnInit() {
    this.miembro[0].nombre = 'Maria';
    this.miembro[0].apellidos = 'Fernandez Fernandez';
    this.miembro[0].edad = 38;
    this.miembro[0].imagen = 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/mujer-feliz_0.jpg';
    this.miembro[0].descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';

    this.miembro[1].nombre = 'Alejandro';
    this.miembro[1].apellidos = 'Reyes Franco';
    this.miembro[1].edad = 32;
    this.miembro[1].imagen = 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/p/por-que-nos-atraen-los-hombres-con-barba-2.jpg';
    this.miembro[1].descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';

    this.miembro[2].nombre = 'Sergi';
    this.miembro[2].apellidos = 'Capdevila Ferrer';
    this.miembro[2].edad = 27;
    this.miembro[2].imagen = 'https://televisa.brightspotcdn.com/dims4/default/5690a49/2147483647/strip/true/crop/807x606+186+3/resize/818x614!/quality/90/?url=https%3A%2F%2Ftelevisa-brightspot.s3.amazonaws.com%2Fapi%2F08%2F1a%2Fc7fd3d564e6ba71568e23d133a7f%2Fhombre-con-rostro-dulce.jpg';
    this.miembro[2].descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';

    this.miembro[3].nombre = 'Pablo';
    this.miembro[3].apellidos = 'Vargas Sanchez';
    this.miembro[3].edad = 42;
    this.miembro[3].imagen = 'https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg';
    this.miembro[3].descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';

    this.miembro[4].nombre = 'Sofia';
    this.miembro[4].apellidos = 'Garcia Mañas';
    this.miembro[4].edad = 28;
    this.miembro[4].imagen = 'https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2020/03/estas_son_las_caracteristicas_que_vuelven_a_una_mujer_irresistible_segun_ellos.jpg';
    this.miembro[4].descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';
  }

  informarMiembro(event) {
    this.informarEvent.emit(event);
  }

}
