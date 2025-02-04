import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = environment.API_PATH;

  private static usersSubject = new BehaviorSubject<User[]>([]);
  static users$ = UsersService.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.api}usuarios`).subscribe((users) => {
      UsersService.usersSubject.next(users);
    });
  }

  createUser(user: User) {
    return this.http.post(`${this.api}usuarios`, user);
  }

  searchUser(id: number) {
    return this.http.get<User>(`${this.api}usuarios/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.api}usuarios/${id}`);
  }

}
