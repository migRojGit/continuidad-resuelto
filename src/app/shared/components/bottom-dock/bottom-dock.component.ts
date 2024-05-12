import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { Result } from '../../../core/interfaces/result.interface';

@Component({
  selector: 'app-bottom-dock',
  standalone: true,
  imports: [
    DockModule
  ],
  templateUrl: './bottom-dock.component.html'
})
export class BottomDockComponent implements OnInit {
  public dockItems        !: MenuItem[];
  public displayTerminal  !: boolean;
  public displayFinder    !: boolean;
  public displayGalleria   : boolean = false;
  constructor(
    private messageService  : MessageService,
    private usuariosService : UsuariosService,
    private router          : Router
  ) { }


  ngOnInit(): void {
    this.dockItems = [
      {
        label: 'show',
        tooltipOptions: {
          tooltipLabel: 'Ver usuarios',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: '../../assets/images/confuturo.jpg',
        command: () => {
          this.router.navigate(['person'])
        }
      },
      {
        label: 'Terminal',
        disabled: true,
        tooltipOptions: {
          tooltipLabel: 'Terminal',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
        command: () => {
          this.displayTerminal = true;
        }
      },
      {
        label: 'App Store',
        disabled: true,
        tooltipOptions: {
          tooltipLabel: 'App Store',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
        }
      },
      {
        label: 'Safari',
        disabled: true,
        tooltipOptions: {
          tooltipLabel: 'Safari',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
        command: () => {
          this.messageService.add({ severity: 'warn', summary: 'Safari has stopped working' });
        }
      },
      {
        label: 'Galería',
        tooltipOptions: {
          tooltipLabel: 'Galería',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
        command: () => {
          this.displayGalleria = this.displayGalleria ? false : true;
          this.router.navigate(['gallery']);
        }
      },
      {
        label: 'GitHub',
        disabled: true,
        tooltipOptions: {
          tooltipLabel: 'GitHub',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg'
      },
      {
        label: 'Refresh',
        tooltipOptions: {
          tooltipLabel: 'Recargar el sitio',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,

        },
        icon: '../../assets/images/reciclaje.gif',
        command: () => {
          window.location.reload();
        }
      }
    ];
  }

  onCaptureDisplay(display: boolean): void {
    this.displayGalleria = display;
  }
}
