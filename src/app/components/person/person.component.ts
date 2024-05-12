import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Result } from '../../core/interfaces/result.interface';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Name } from '../../core/interfaces/name.interface';
import { Street } from '../../core/interfaces/street.interface';
import { UsuariosService } from '../../core/services/usuarios.service';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CardModule, ButtonModule, RippleModule, CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit, OnDestroy{
  @Input() displayFinder  !: boolean;
  public collection        : Result[] = [];
  public displayToast      : boolean = false;
  private subscriptions    : Subscription[] = [];
  constructor(
    private primeNgConfig   : PrimeNGConfig,
    private usuariosService : UsuariosService,
    private messageService  : MessageService,
    private router          : Router
  ) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true
    this.subscriptions.push(this.usuariosService.getAllContent().subscribe(({ info, results }) => {
      this.collection = results;
      this.collection = this.usuariosService.saveCollection(this.collection);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  nameConstructor({ title, first, last}: Name): string{
    return `${title}. ${first} ${last}`
  }

  streetConstructor({number, name}: Street): string{
    return `${name} ${number}`
  }

  deleteUser(uuid: string) {
    this.collection = this.usuariosService.deleteUser(uuid)
    if (this.collection.length === 0) {
      this.router.navigate(['']).then( () => {
        this.show()
      })
    }
  }

  show(){
    this.messageService.add({severity:'info', summary:'Información!!', detail:'Sin clientes para mostrar'});
  }
}
