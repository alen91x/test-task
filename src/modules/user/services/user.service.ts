import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => response.json().data));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => response.json()));
  }

  fetchPaginationInfo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map(response => {
      return {
        total_pages: response.json().total_pages,
        per_page: response.json().per_page,
        total: response.json().total,
        page: response.json().page
      };
    }));

  }
}