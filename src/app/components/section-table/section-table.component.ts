import { CommonModule, DatePipe } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService, ConfirmationService } from 'primeng/api';
import { NewSectionService } from '../../core/new-service/new-section.service';
import { TableUser } from '../../core/interfaces/table-user.interface';
import { LocalDatePipe } from '../../shared/pipes/local-date.pipe';
import { AvatarModule } from 'primeng/avatar';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogModifyComponent } from './dialog-modify/dialog-modify.component';

@Component({
  selector: 'app-section-table',
  standalone: true,
  imports: [
    DialogDeleteComponent,
    DialogModifyComponent,
    CommonModule,
    PanelModule,
    TableModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    FormsModule,
    InputNumberModule,
    AvatarModule,

  ],
  templateUrl: './section-table.component.html',
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    },
    LocalDatePipe,
    DatePipe
  ],

})
export class SectionTableComponent implements OnInit {
  public userCollection     : TableUser[] = [];
  public displayCancel      : boolean     = false;
  public displaySave        : boolean     = false;
  public displayDialog      : boolean     = false;
  public displayModifyDialog: boolean     = false;
  public focusUser          : TableUser   = {} as TableUser;
  public objectToComponent  : { user: TableUser, displayDialog: boolean } = { user: {} as TableUser, displayDialog: false };
  constructor(
    private newSectionService   : NewSectionService,
    private localDatePipe       : DatePipe,
    private confirmationService : ConfirmationService,
    private messageService      : MessageService
  ) { }

  ngOnInit(): void {
    this.newSectionService.getAllContent()
      .subscribe((data) => {
        this.userCollection = data
      })
   }

   updateDate(date: any): string | null {
    return this.localDatePipe.transform(date, 'longDate');
  }

  /**
   * Dispara el cuadro de diálogo para eliminar
   * @param user
   * @returns
   */
  deleteUser(user: TableUser): void{
    const user_: TableUser = this.userCollection.find(onUser => onUser.uuid === user.uuid)!
    if (!user_) return
    this.focusUser      = user_
    this.displayDialog  = user_ ? true : false
    console.log(user.password)
  }

  /**
   * Recibe la respuesta de eliminación
   * @param user
   * @returns
   */
  onDeleteUser(user: TableUser): void{
    const user_: TableUser = this.userCollection.find(onUser => onUser.uuid === user.uuid)!
    if (!user_) return
    this.userCollection = this.userCollection.filter(user => user.uuid !== user_.uuid);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario eliminado' });
  }

  /**
   * Recibe la respuesta de la modificación
   * @param user
   * @returns
   */
  onModifyUser(user: TableUser): void{
    const user_: TableUser = this.userCollection.find(onUser => onUser.uuid === user.uuid)!
    if (!user_) return
    this.userCollection = this.userCollection.filter(user => user.uuid !== user_.uuid);
    this.userCollection.push({
      name: user_.name,
      age: user_.age,
      username: user.username,
      date: user_.date,
      location: user.location,
      picture: user_.picture,
      uuid: user_.uuid,
      password: user_.password,
      locationPicture: user.locationPicture
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario modificado' });
  }

  /**
   * Dispara la modificación del usuario
   * @param user
   * @returns
   */
  modifyUser(user: TableUser): void{
    const user_: TableUser = this.userCollection.find(onUser => onUser.uuid === user.uuid)!
    if (!user_) return
    this.focusUser            = user_
    this.displayModifyDialog  = user_ ? true : false
  }

  onDestroyComponent(destroy: boolean): void {
    this.displayDialog = !destroy
  }

  onDestroyModifyComponent(destroy: boolean): void {
    this.displayModifyDialog = !destroy
  }
}
