import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result, UsersResponse } from './uers.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI = 'https://randomuser.me/api/?';
  constructor(private readonly httpClient: HttpClient) {

  }

  public getUser(): Observable<Result[]> {
    return this.httpClient.get<UsersResponse>(`${this.URI}results=100`).pipe(
      map(response => response.results)
    );
  }
}
