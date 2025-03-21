import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { Router, RouterLink } from '@angular/router';
import 'sweetalert2/src/sweetalert2.scss';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@Component({
  selector: 'app-buttons',
  imports: [RouterLink, SweetAlert2Module],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() myUser!:IUser;
  userServices = inject(UsersService);
  titularAlerta:string = "";
  router = inject(Router);


}
