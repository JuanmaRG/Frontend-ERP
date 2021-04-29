import { IEstado } from "./iestado";

export class Estado implements IEstado{
  id: number;
  valor: String;

  constructor(id:number, valor: String){
    this.id = id;
    this.valor = valor;
  }
}
