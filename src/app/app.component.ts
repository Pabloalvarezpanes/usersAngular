import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { IUser } from './interfaces/iuser.interface';
import { UsersService } from './services/users.service';
import { IResponse } from './interfaces/iresponse.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrUsers: IUser[] = [];
  userServices = inject(UsersService);
  @Input() unUser!: IUser;
  linkNext!: number;
  linkPrev!: number;

  async chargeUsers() {
    try {
      let response: IResponse = await this.userServices.getAll();
      this.linkNext = response.page +1;
      this.linkPrev = response.page;
      this.arrUsers = response.results;
    } catch (error){}
  }
}
