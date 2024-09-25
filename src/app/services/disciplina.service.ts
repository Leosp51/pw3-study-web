import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  URL: string = "http://localhost:8080/disciplinas"//link do servidor
  constructor(private httpCliente: HttpClient) { } //injetar o HttpClient através do angular (como @Autowired do java)
  buscarDisciplinas(): Observable<Disciplina[]>{
    return this.httpCliente.get<Disciplina[]>(this.URL);
  }
  buscarDisciplinaPorId():Observable<Disciplina>{
    return this.httpCliente.get<Disciplina>(this.URL)
  }
}
