import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    let resp: Observable<any>;

    let httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);

    resp = this.http.post(this.BASE_URL + '/login-user/login', null, {
      params: httpParams,
      responseType: 'text',
    });

    return resp;
  }
}
