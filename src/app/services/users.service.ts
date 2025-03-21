import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom } from 'rxjs';

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
  

}
