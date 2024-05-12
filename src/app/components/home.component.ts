import { Component, OnDestroy, OnInit } from '@angular/core';

import { UsuariosService } from '../core/services/usuarios.service';
import { PersonComponent } from './person/person.component';
import { Subscription } from 'rxjs';
import { Info } from '../core/interfaces/info.interface';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { DockModule } from 'primeng/dock';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { TerminalModule, TerminalService } from 'primeng/terminal';
import { GalleriaModule } from 'primeng/galleria';
import { MenuItem, MessageService } from 'primeng/api';
import { PhotoService } from '../core/services/photo.service';
import { NodeService } from '../core/services/node.service';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoResource } from '../core/interfaces/resources/photo-resource.interface';
import { Router, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../shared/components/menu-bar/menu-bar.component';
import { BottomDockComponent } from '../shared/components/bottom-dock/bottom-dock.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PersonComponent,
    GalleryComponent,
    MenuBarComponent,
    BottomDockComponent,
    CardModule,
    DockModule,
    ToastModule,
    DialogModule,
    TreeModule,
    TerminalModule,
    GalleriaModule,
    RippleModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  public info: Info = {} as Info;
  private subscriptions: Subscription[] = [];

  /**
   * DESKTOP
   */


  public responsiveOptions!: any[];
  public images           !: PhotoResource[];
  public nodes            !: any[];
  public subscription     !: Subscription;
  constructor(
    private userService     : UsuariosService,
    private galleriaService : PhotoService,
    private nodeService     : NodeService,

    private terminalService : TerminalService,
    private router          : Router
  ) { }

  ngOnInit(): void {






    this.subscriptions.push(this.terminalService.commandHandler.subscribe((command) => { this.commandHandler(command); }))
    this.nodeService.getFiles().then((data) => (this.nodes = data))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public commandHandler(text: any): void {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
        case 'date':
            response = 'Today is ' + new Date().toDateString();
            break;

        case 'greet':
            response = 'Hola ' + text.substring(argsIndex + 1) + '!';
            break;

        case 'random':
            response = Math.floor(Math.random() * 100);
            break;

        default:
            response = 'Unknown command: ' + command;
            break;
    }

    if (response) {
        this.terminalService.sendResponse(response as string);
    }
  }




  routerAction(event: any): void{
    console.log(event)
  }
}
