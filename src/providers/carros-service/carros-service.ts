import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carro } from '../../modelos/carro';


@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) {
  }
   lista() {
    return this._http.get<carro[]>('http://localhost:8080/api/carro/listaTodos');

   }
}
