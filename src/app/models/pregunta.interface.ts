export interface Pregunta {
  texto: string;
  opciones: { [key: string]: string };
  respuestaCorrecta: string;
  multiple: boolean;
  feedbacks: { [key: string]: string };
}