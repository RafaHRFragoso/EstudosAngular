import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getSelecoes() {
    return ['Suiça', 'Costa Rica', 'Servia', 'Alemanha'];
  }
}
