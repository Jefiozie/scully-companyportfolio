import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result, UsersResponse } from './users.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'https://randomuser.me/api/?';
  constructor(private readonly httpClient: HttpClient) { }

  public getUser(): Observable<Result[]> {
    return this.httpClient.get<UsersResponse>(`${this.uri}results=100`).pipe(
      map(response => response.results)
    );
  }
}
