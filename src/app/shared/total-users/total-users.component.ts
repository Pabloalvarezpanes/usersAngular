import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: '[app-total-users]',
  imports: [ButtonsComponent],
  templateUrl: './total-users.component.html',
  styleUrl: './total-users.component.css'
})
export class TotalUsersComponent {
  @Input() myUser!:IUser;
  @Output() deleteUserEmit: EventEmitter<Boolean> = new EventEmitter();

  deleteUser(event: Boolean){
    this.deleteUserEmit.emit(event);
  }




}
