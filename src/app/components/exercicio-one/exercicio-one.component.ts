import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CoinChange } from './interfaces/coin-change.interface';
import { genericResponse } from '../../../assets/resources/geenric-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-one',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-one.component.html',
  providers: [JsonPipe],
})
export class ExercicioOneComponent implements OnInit {
  public problem = {
    title: 'Problema N° 1',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que dado "N" monto y "X" conjuntos de monedas, retorne siempre la combinación mínima de monedas para su conversión.  Ej: Si ingreso 1000, y una colección de monedas de [100, 500] el retorno deberá ser: ',
    exemple: '{minCoins: 2, coins: [100, 100]}',
  };
  public genericResponse = () => genericResponse();
  constructor(
    private jsonPipe  : JsonPipe
  ) {}

  ngOnInit(): void {


  }

  showProblem(money: number, coins: number[]): CoinChange{
    const minCoins: number[] = Array(money + 1).fill(Infinity)
    const lastCoin: number[] = Array(money + 1).fill(-1)

      minCoins[0] = 0
      for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j <= money; j++) {
          if (j >= coins[i]) {
            if (minCoins[j] > 1 + minCoins[j - coins[i]]) {
              minCoins[j] = 1 + minCoins[j - coins[i]]
              lastCoin[j] = coins[i]
            }
          }
        }
      }

      const res: CoinChange = {
        minCoins: minCoins[money],
        coins: []
      }

      let total: number = money
      while (total > 0) {
        res.coins.push(lastCoin[total])
        total -= lastCoin[total]
      }

      return res
    }
  }

