import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerroService, RespuestaPerros } from './perro.service';
@Component({ selector: 'app-perros', imports: [CommonModule], templateUrl: './perros.html' })
export class Perros implements OnInit {
  perros: string[] = []; cargando = true; error = '';
  constructor(private servicio: PerroService) {}
  ngOnInit(): void { this.cargarPerros(); }
  cargarPerros(): void {
    this.cargando = true; this.error = '';
    this.servicio.obtenerPerros().subscribe({
      next: (r: RespuestaPerros) => { this.perros = r.message; this.cargando = false; },
      error: (e) => { this.error = 'Error'; this.cargando = false; }
    });
  }
}