import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {
  }

  getPayment(consentid: string): Observable<any> {
    return this.http.get(environment.payment);
  }

  execute(consentid: string, tan: number): Observable<any> {
    return this.http.post(environment.execute, {tan});
  }

  validate(consentid: string, accepted: boolean): Observable<any> {
    return this.http.post(environment.validate, {accepted});
  }
}
