import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  selecaoNome: string;

  selecoesAdver: string[];

  constructor(private selecoesService: CursosService) {
    this.selecaoNome = 'Brasil';
    this.selecoesAdver = this.selecoesService.getSelecoes();
  }

  ngOnInit() {
  }

}
