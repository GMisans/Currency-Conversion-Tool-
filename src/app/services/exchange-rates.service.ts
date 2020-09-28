import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  constructor(private httpClient: HttpClient) {}

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(
      `https://openexchangerates.org/api/latest.json?app_id=0e99a90e26224cc285f0d8f8cc7cadf2&base=${base}`
    );
  }
}
