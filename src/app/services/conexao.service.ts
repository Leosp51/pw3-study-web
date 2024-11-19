import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {
  URL:string = "http://localhost:8080/conexoes"
  constructor(private httpClient:HttpClient) { }
  contarConexoes(): Observable<number>{
    return this.httpClient.get<number>(`${this.URL}`);
  }
}//gerar serviço ng g s nome
//gerar interface ng g i nome
