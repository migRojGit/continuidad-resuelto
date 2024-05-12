import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListboxModule } from 'primeng/listbox';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TableUser } from '../../../core/interfaces/table-user.interface';
import { AvatarModule } from 'primeng/avatar';
import { NewSectionService } from '../../../core/new-service/new-section.service';
import { Location } from '../../../core/interfaces/new-section/location-collection.interface';

@Component({
  selector: 'app-dialog-modify',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    CommonModule,
    RippleModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    ListboxModule,
  ],
  templateUrl: './dialog-modify.component.html'
})
export class DialogModifyComponent implements OnInit, OnDestroy {
  @Input() focusModifyUser          !: TableUser;
  @Input() displayModifyDialog      !: boolean;
  @Output() onModifyDestroyComponent= new EventEmitter<boolean>();
  @Output() onModifyUser            = new EventEmitter<TableUser>();
  public focusUser_: TableUser      = {} as TableUser;
  public displayDialog_              : boolean = false;
  public form                       !: UntypedFormGroup;
  public locationCollection          : Location[] = [];
  public selectedLocation            : Location = {} as Location;

  constructor(
    private formBuilder : UntypedFormBuilder,
    private newService  : NewSectionService
  ){}
  ngOnInit(): void {
    this.focusUser_         = this.focusModifyUser ? this.focusModifyUser : {} as TableUser;
    this.displayDialog_     = this.displayModifyDialog ? this.displayModifyDialog : false;
    this.locationCollection = this.newService.getAllLocations();
    this.selectedLocation   = this.newLocation(this.focusUser_.location);

    this.form = this.formBuilder.group({
      uuid            : [this.focusUser_.uuid, [Validators.required]],
      username        : [this.focusUser_.username, [Validators.required]],
      location        : [this.selectedLocation.title, [Validators.required]],
    });
  }
  ngOnDestroy(): void {
    this.focusUser_     = {} as TableUser;
    this.displayDialog_ = false;
  }

  modifyUser(): void {

    if(this.form.invalid) return;
    const user_: TableUser = {
      uuid: this.form.get('uuid')?.value,
      username: this.form.get('username')?.value,
      location: this.selectedLocation.title,
      name: this.focusUser_.name,
      age: this.focusUser_.age,
      date: this.focusUser_.date,
      picture: this.focusUser_.picture,
      password: this.focusUser_.password,
      locationPicture: this.selectedLocation.itemImageSrc
    }

    this.onModifyUser.emit(user_);
    this.cancel(true);
  }

  newLocation(location: string): Location{
    return this.locationCollection.find(locationCollection => locationCollection.title === location)!
  }

  cancel(v: boolean): void {
    this.onModifyDestroyComponent.emit(v);
  }
}
