import { IDisponibilidad } from "./idisponibilidad";

export class Disponibilidad implements IDisponibilidad {
  id: number;
  turno: String;

  constructor(id: number, turno: String){
    this.id = id;
    this.turno = turno;
  }
}
