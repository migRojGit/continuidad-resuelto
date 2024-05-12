import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { genericResponse } from '../../../assets/resources/geenric-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-three',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-three.component.html',
  providers: [JsonPipe],
})
export class ExercicioThreeComponent {
  public problem = {
    title: 'Problema N° 3',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que retorne la secuencia de fibonacci en base a un número dado (como inicio) y una cantidad de números retornados ',
    exemple: 'input: { initSequence: 0, countNumbers: 7 }, output: { finacci´sNumbers: 0,1,1,2,3,5,8 }',
  };
  public genericResponse = () => genericResponse();

  showProblem(initSequence: number, countNumbers: number): number[] {
    const sequence: number[] = [];
    let current = initSequence;
    let next = initSequence + 1;

    for (let i = 0; i < countNumbers; i++) {
      sequence.push(current);
      [current, next] = [next, current + next];
    }

    return sequence;
  }
}
