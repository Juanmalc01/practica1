import { Component, OnInit } from '@angular/core';
import { miembro } from './miembro';

@Component({
  selector: 'app-quien-somos',
  templateUrl: './quien-somos.component.html',
  styleUrls: ['./quien-somos.component.css']
})
export class QuienSomosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miembroSeleccionado: miembro;

  cambiarMiembroSeleccionado(miembro) {
    this.miembroSeleccionado = miembro;
  }

}
