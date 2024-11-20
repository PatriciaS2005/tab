qimport { HttpClient } from '@angular/common/http';
import { deputados } from './deputados';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {
  private API = 'https://dadosabertos.camara.leg.br/api/v2/deputados?nome='
  private deputados: deputados[] = []

  constructor(private http: HttpClient) {
    this.http.get(`${this.API} &t=Titulo`).subscribe(
      res => {
        console.log(res)
      }
    )
   }

   buscarDeputadoPorNome(nome: string): Observable<any>{
    return this.http<any>(`${this.API}&t=${nome}`)
   }
}
