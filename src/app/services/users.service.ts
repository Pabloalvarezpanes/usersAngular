import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseurl: string = "https://peticiones.online/api/users";

  getAll(): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseurl));
  }

  getPag(url: string): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(url));
  }

  getById(id: string): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.baseurl}/${id}`));
  }

  delete(id: string): Promise<any> {
    return lastValueFrom(this.httpClient.delete(`${this.baseurl}/${id}`));
  }

  update(user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseurl}/${user._id}`, user));
  }

  insert(user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.post<IUser>(this.baseurl, user));
  }
  

}
