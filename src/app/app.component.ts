import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosService } from './core/services/usuarios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",

})
export class AppComponent {
  title = 'conti-test';
}
