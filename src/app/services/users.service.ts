import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

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
