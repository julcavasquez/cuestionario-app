import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {
   preguntas = [
  {
    texto: '¿Cuál es tu color favorito?',
    multiple: false,
    opciones: [
      { key: 'a', value: 'Rojo' },
      { key: 'b', value: 'Azul' },
      { key: 'c', value: 'Verde' },
      { key: 'd', value: 'Amarillo' }
    ]
  },
  {
    texto: 'Selecciona tus lenguajes favoritos',
    multiple: true,
    opciones: [
      { key: 'a', value: 'JavaScript' },
      { key: 'b', value: 'Python' },
      { key: 'c', value: 'C#' },
      { key: 'd', value: 'Rust' }
    ]
  }
];

indiceActual = 0;
  respuestas: any[] = [];

  get preguntaActual() {
    return this.preguntas[this.indiceActual];
  }

 isChecked(key: string): boolean {
    const r = this.respuestas[this.indiceActual];
    return Array.isArray(r) ? r.includes(key) : r === key;
  }

 seleccionar(key: string, evento: Event): void {
    const multiple = this.preguntaActual.multiple;

    if (multiple) {
      if (!Array.isArray(this.respuestas[this.indiceActual])) {
        this.respuestas[this.indiceActual] = [];
      }

      const checked = (evento.target as HTMLInputElement).checked;
      if (checked) {
        this.respuestas[this.indiceActual].push(key);
      } else {
        this.respuestas[this.indiceActual] = this.respuestas[this.indiceActual].filter((k: string) => k !== key);
      }
    } else {
      this.respuestas[this.indiceActual] = key;
    }
  }


obtenerRespuestaActual(): string {
    const respuesta = this.respuestas[this.indiceActual];
    return Array.isArray(respuesta)
      ? respuesta.map((r: string) => r.toUpperCase()).join(', ')
      : respuesta?.toUpperCase() ?? '';
  }

siguiente(): void {
    if (this.indiceActual + 1 < this.preguntas.length) {
      this.indiceActual++;
    } else {
      alert('¡Cuestionario finalizado!');
      console.log('Respuestas:', this.respuestas);
    }
  }
}

