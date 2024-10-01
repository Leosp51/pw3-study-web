import { Observable } from 'rxjs';
import { ConexaoService } from './../../services/conexao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  conexoes:any = 0;
  constructor(conexaoService:ConexaoService){
    conexaoService.contarConexoes().subscribe(resp=>{
      this.conexoes = resp;
    });
  }

}
