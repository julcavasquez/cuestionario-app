import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ en lugar de BrowserModule
@Component({
  selector: 'app-root',
  standalone: true, // 👈 importante para standalone components
  imports: [CommonModule,RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cuestionario-app';
}
