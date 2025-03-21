import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-user-view',
  imports: [ButtonsComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  @Input() idUser: string = "";
  myUser: IUser | any;
  userServices = inject(UsersService);

  async ngOnInit() {
    try {
      this.myUser = await this.userServices.getById(this.idUser);
    } catch (error){
      console.log(error);
    }
  }

}
