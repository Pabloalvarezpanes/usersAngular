import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  @Input() idUser: string="";
  userForm: FormGroup = new FormGroup({},[]);
  myUser!: IUser;
  userServices = inject(UsersService);
  title: string = "Registrar"

  async ngOnInit() {

    if (this.idUser){
      try {
        this.myUser = await this.userServices.getById(this.idUser);
        this.title = 'Actualizar';
      } catch (error) {
        console.log(error);
      }
    }

    this.userForm = new FormGroup({
      _id: new FormControl(this.idUser || null,[]),
      last_name: new FormControl(this.myUser?.last_name || null, []),
      first_name: new FormControl(this.myUser?.first_name || null ,[]),
      email: new FormControl(this.myUser?.email || null,[]),
      image: new FormControl(this.myUser?.image || null,[]),
    },[]);
  }


  async getDataForm() {
    let response: IUser | any;
    try{
      if(this.userForm.value._id){
        response = await this.userServices.update(this.userForm.value);
        console.log(this.userForm.value);
      }else {
        response = await this.userServices.insert(this.userForm.value);
        console.log(response);
      }
    }catch(error) {
      console.log(error);
    }
      this.userForm.reset();
    }

    checkControl(controlName: string, errorName: string): boolean | undefined {
      return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
    }
  }





