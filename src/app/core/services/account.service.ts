import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) { }

  public getAccount(): Observable<any> {
    return this._http.get('account');
  }
}
