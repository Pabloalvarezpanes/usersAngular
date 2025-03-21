import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { IResponse } from '../../interfaces/iresponse.interface';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { TotalUsersComponent } from '../../shared/total-users/total-users.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TotalUsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  arrUsers: IUser[] = [];
  userServices = inject(UsersService);
  @Input() unUser!: IUser;
  linkNext!: number;
  linkPrev!: number;

  ngOnInit() {
    this.chargeUsers();
  }

  async goNext() {
    let response: IResponse = await this.userServices.getPag(
      `https://peticiones.online/api/users?page=${this.linkNext}`
    );

    if (this.linkNext > response.total_pages) {
      return;
    }
    this.linkNext = response.page + 1;
    this.arrUsers = response.results;
  }

  async goPrev() {
    if (this.linkPrev < 1) {
      return;
    }

    let response: IResponse = await this.userServices.getPag(
      `https://peticiones.online/api/users?page=${this.linkPrev - 1}`
    );
    this.linkPrev = response.page;
    this.linkNext = response.page + 1;
    this.arrUsers = response.results;
  }

  async chargeUsers() {
    try {
      let response: IResponse = await this.userServices.getAll();
      this.linkNext = response.page +1;
      this.linkPrev = response.page;
      this.arrUsers = response.results;
    } catch (error){}
  }

  deleteUser(event: Boolean){
    if(event){
      this.chargeUsers();
  } 
}

}
