import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = environment.API_PATH;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${this.api}`);
  }

  static users : User[] = [
    {
      fullname: 'Tiago Silva',
      id: 0,
      age: 13
    },
    {
      fullname: 'João Silva',
      id: 1,
      age: 23
    },
    {
      fullname: 'Matheus Monteiro',
      id: 2,
      age: 16
    }
  ];
}
