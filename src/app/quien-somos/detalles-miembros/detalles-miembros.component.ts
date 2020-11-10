import { Component, OnInit, Input} from '@angular/core';
import { miembro } from '../miembro';

@Component({
  selector: 'app-detalles-miembros',
  templateUrl: './detalles-miembros.component.html',
  styleUrls: ['./detalles-miembros.component.css']
})
export class DetallesMiembrosComponent implements OnInit {

  @Input() miembro: miembro;

  constructor() { }

  ngOnInit() {
    this.miembro = new miembro();
    this.miembro.nombre = '';
    this.miembro.apellidos = '';
    this.miembro.edad = 0;
    this.miembro.descripcion = '';
  }

}
