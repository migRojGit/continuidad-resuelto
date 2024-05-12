import { Component, LOCALE_ID, OnInit } from '@angular/core';
import  localEs  from '@angular/common/locales/es-CL';
import { PrimeNGConfig } from 'primeng/api';

import { DatePipe, registerLocaleData } from '@angular/common';
import { LocalDatePipe } from '../../pipes/local-date.pipe';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
registerLocaleData(localEs, 'es-CL');

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [ MenubarModule,],
  templateUrl: './menu-bar.component.html',
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-CL'
  },
  LocalDatePipe,
  DatePipe
]
})
export class MenuBarComponent implements OnInit {
  public menubarItems     !: any[];

  constructor(
    private primeNgConfig   : PrimeNGConfig,
    private localDatePipe   : DatePipe,
    private router          : Router
  ) {}

  ngOnInit(): void {

    const systemResources = [
      {
        label: 'Finder',
        styleClass: 'menubar-root',
        command: () => {
          this.router.navigate(['']);
        }
      },
      {
        label: 'Ejercicios',
        items: [
          {
            label: 'Ejercicio 1',
            icon: 'pi pi-fw pi-pencil',
            route: 'exercise-one',
            command: () => {
              this.router.navigate(['exercise-one']);
            }
          },
          {
            label: 'Ejercicio 2',
            icon: 'pi pi-fw pi-pencil',
            route: '',
            command: (ex: boolean) => {
              this.router.navigate(['exercise-two']);
            }
          },
          {
            label: 'Ejercicio 3',
            icon: 'pi pi-fw pi-pencil',
            route: '',
            command: (ex: boolean) => {
              this.router.navigate(['exercise-three']);
            }
          },
          {
            label: 'Ejercicio 4',
            icon: 'pi pi-fw pi-pencil',
            route: '',
            command: (ex: boolean) => {
              this.router.navigate(['exercise-four']);
            }
          }
        ]
      },
      {
        label: 'Nueva Sección',
        command: () => {
          this.router.navigate(['table']);
        }
      }
    ];

    this.primeNgConfig.ripple = true
    this.menubarItems = systemResources;
  }

  updateDate(): string | null {
    const date = new Date()
    return this.localDatePipe.transform(date, 'longDate');
  }

}
