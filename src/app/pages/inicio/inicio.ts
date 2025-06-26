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
    texto: "1. Cuando en un proceso de contratación se establece que el postor debe formular su oferta proponiendo un monto fijo integral por toda la actividad necesaria para el cumplimiento contractual, y las cantidades, magnitudes y calidades de la prestación están completamente definidas en el requerimiento, ¿a qué modalidad de pago se refiere esta condición según el Reglamento de la Ley General de Contrataciones Públicas?",
    multiple: false,
    opciones: [
      { texto: "A. Precios Unitarios.", correcta: false, feedback: "Madrid es la capital de España." },
      { texto: "B. Tarifas.", correcta: false, feedback: "París es la capital de Francia." },
      { texto: "C. Esquema Mixto.", correcta: false, feedback: "Berlín es la capital de Alemania." },
      { texto: "D. Suma Alzada.", correcta: true, feedback: "Explicación:El Anexo I “Definiciones” del Reglamento, en su numeral 85, define “Suma alzada” como la “modalidad de pago aplicable cuando las cantidades, magnitudes y calidades de la prestación están definidos en el requerimiento. El postor formula su oferta proponiendo un monto fijo integral por toda actividad que sea necesaria para el cumplimiento contractual y presenta su presupuesto desagregado en costo y plazo de ejecución.”La modalidad de Suma Alzada se utiliza cuando existe certeza sobre el alcance total de la prestación. El proveedor oferta un precio global por el íntegro de lo requerido, asumiendo el riesgo de cualquier variación en las cantidades si estas estaban definidas." }
    ]
  },
  {
    texto: "¿Cuáles de los siguientes son lenguajes de programación?",
    multiple: true,
    opciones: [
      { texto: "Python", correcta: true, feedback: "Python es un lenguaje de programación." },
      { texto: "HTML", correcta: false, feedback: "HTML es un lenguaje de marcado, no de programación." },
      { texto: "Java", correcta: true, feedback: "Java es un lenguaje de programación." }
    ]
  }
];
  preguntaActualIndex = 0;
  seleccionUnica: any = null;
  seleccionMultiple: Set<any> = new Set();

  get preguntaActual() {
    return this.preguntas[this.preguntaActualIndex];
  }

  seleccionarOpcion(opcion: any) {
    if (this.preguntaActual.multiple) {
      if (this.seleccionMultiple.has(opcion)) {
        this.seleccionMultiple.delete(opcion);
      } else {
        this.seleccionMultiple.add(opcion);
      }
    } else {
      this.seleccionUnica = opcion;
    }
  }

  get respuestasCorrectas(): any[] {
    return this.preguntaActual.opciones.filter(op => op.correcta);
  }

  get esRespuestaCorrecta(): boolean {
    if (this.preguntaActual.multiple) {
      const seleccionadas = Array.from(this.seleccionMultiple);
      return (
        seleccionadas.length === this.respuestasCorrectas.length &&
        seleccionadas.every(sel => sel.correcta)
      );
    } else {
      return this.seleccionUnica?.correcta;
    }
  }

  get feedbackCorrecto(): string {
    if (this.preguntaActual.multiple) {
      return Array.from(this.seleccionMultiple)
        .filter(op => op.correcta)
        .map(op => op.feedback)
        .join('\n');
    } else {
      return this.seleccionUnica?.feedback ?? '';
    }
  }

  siguientePregunta() {
    this.seleccionUnica = null;
    this.seleccionMultiple.clear();
    if (this.preguntaActualIndex < this.preguntas.length - 1) {
      this.preguntaActualIndex++;
    } else {
      alert("¡Has completado todas las preguntas!");
    }
  }
}

