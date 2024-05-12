import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { genericResponse } from '../../../assets/resources/geenric-response';

@Component({
  selector: 'app-exercicio-four',
  standalone: true,
  imports: [PanelModule, JsonPipe, CommonModule],
  templateUrl: './exercicio-four.component.html',
  providers: [JsonPipe],
})
export class ExercicioFourComponent {
  public problem = {
    title: 'Problema N° 4',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: [
      'Se debe contruir una nueva sección, para ello se ha disponibilizado "Nueva Sección" en el menu de navegación. ',
      'Para acceder a dicha sección debe ser por medio de la barra de navegación. ',
      'La sección será una tabla con los datos de los usuarios proporcionados por la api actual',
      'Los datos de los usuarios que se mostrarán son: '
    ],
    list: [
      'Imagen del usaurio en su versión medium',
      'Nombre correctamente formateado',
      'Edad',
      'Nombre de usuario en el sistema',
      'Fecha de registro',
      'Se debe reconstruir la colección de usuarios para que cada uno de los objetos, además, tenga una imagen relacionada como ciudad',
      'La imagen de esta locación debe ser obtenida a partir de la colección de imágenes con las que cuenta la aplicación',
      'Se debe disponibilizar un botón para eliminar y otro para modificar los datos del usuario el cual exija, por medio de un cuadro de dialogo, una comprobación de la contraseña del usuario',
      'La lista de usuarios para esta sección se debe limitar a 10 registros',
      'Se debe crear un servicio dedicado para esta sección',
      'Se debe respetar la estructura actualmente planteada en esta aplicación',
    ]
  };
  public genericResponse = () => genericResponse();


  showProblem(): void{

  }
}
