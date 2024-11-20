import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeputadosService {
  private API = 'https://dadosabertos.camara.leg.br/api/v2/deputados?nome=';

  constructor(private http: HttpClient) {}

  // Método para buscar deputado por nome
  buscarDeputadoPorNome(nome: string): Observable<any> {
    const url = `${this.API}${nome}`;
    return this.http.get<any>(url);
  }
}
