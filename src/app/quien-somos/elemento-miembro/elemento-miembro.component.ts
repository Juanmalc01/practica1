import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';
import { miembro } from '../miembro';

@Component({
  selector: 'app-elemento-miembro',
  templateUrl: './elemento-miembro.component.html',
  styleUrls: ['./elemento-miembro.component.css']
})
export class ElementoMiembroComponent implements OnInit {

  @Input() miembro: miembro;
  @Output() selectEvent = new EventEmitter<miembro>();

  constructor() { }

  ngOnInit() {
  }

  miembroSelected(event) {
    this.selectEvent.emit(this.miembro);
  }

}
