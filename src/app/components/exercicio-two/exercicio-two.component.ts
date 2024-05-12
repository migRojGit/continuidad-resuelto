import { Component, OnInit } from '@angular/core';
import { genericResponse } from '../../../assets/resources/geenric-response';
import { JsonPipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-exercicio-two',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-two.component.html',
  providers: [JsonPipe],
})
export class ExercicioTwoComponent {
  public problem = {
    title: 'Problema N° 2',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que dado dos strings que representen dos números binarios, retorna la suma de ambos como números binarios ',
    exemple: 'input: { firstBinary: 10, secondBinary: 01 }, output: { binaryResult: 11 }',
  };
  public genericResponse = () => genericResponse();

  showproblem(firstBinaryNo: string, secondBinaryNo: string): string {
    let lengthOfFirstNumber: number = firstBinaryNo.length - 1
    let lengthOfSecondNumber: number = secondBinaryNo.length - 1
    const solution: string[] = []
    let carry: number = 0

    while (lengthOfFirstNumber >= 0 || lengthOfSecondNumber >= 0) {
      let sum: number = carry
      if (lengthOfFirstNumber >= 0)
        sum += parseInt(firstBinaryNo.charAt(lengthOfFirstNumber))
      if (lengthOfSecondNumber >= 0)
        sum += parseInt(secondBinaryNo.charAt(lengthOfSecondNumber))
      solution.push((sum % 2).toString())
      carry = Math.floor(sum / 2)
      lengthOfFirstNumber--
      lengthOfSecondNumber--
    }

    if (carry !== 0) solution.push(carry.toString())

    return solution.reverse().join('')
  }

}
