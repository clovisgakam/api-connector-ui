import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  constructor(private http: HttpClient) {
  }

  getConsent(consentid: string): Observable<any> {
    return this.http.get(environment.consent);
  }
}
