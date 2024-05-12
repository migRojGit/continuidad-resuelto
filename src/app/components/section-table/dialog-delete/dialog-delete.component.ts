import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TableUser } from '../../../core/interfaces/table-user.interface';
import { InputNumberModule } from 'primeng/inputnumber';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { compareStringsValidator } from '../../../core/validators/compare-strings.validator';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    InputNumberModule,
    AvatarModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  templateUrl: './dialog-delete.component.html',
  providers: [

  ]
})
export class DialogDeleteComponent implements OnInit, OnDestroy {
  @Input() focusUser          !: TableUser;
  @Input() displayDialog      !: boolean;
  @Output() onDestroyComponent = new EventEmitter<boolean>();
  @Output() onDeleteUser       = new EventEmitter<TableUser>();
  public focusUser_: TableUser = {} as TableUser;
  public displayDialog_        : boolean = false;
  public form                 !: UntypedFormGroup;

  constructor(
    private formBuilder : UntypedFormBuilder,

  ) { }
  ngOnInit(): void {
    this.focusUser_     = this.focusUser ? this.focusUser : {} as TableUser;
    this.displayDialog_ = this.displayDialog  ? this.displayDialog : false;

    this.form = this.formBuilder.group({
      uuid            : [this.focusUser_.uuid,     [Validators.required]],
      name            : [this.focusUser_.name,     [Validators.required]],
      password        : [this.focusUser_.password, [Validators.required,]],
      confirmPassword : ['', [Validators.required]],
    },
    {
      validators: [compareStringsValidator('password', 'confirmPassword')]
    });
  }

  ngOnDestroy(): void {
    this.focusUser_     = {} as TableUser;
    this.displayDialog_ = false;
  }

  deleteUser(): void{
    if(this.form.invalid) return;
    const user: TableUser = {...this.focusUser_}
    this.onDeleteUser.emit(user);
    this.cancel(true);
  }

  cancel(v: boolean): void {
    this.onDestroyComponent.emit(v);
  }
}
