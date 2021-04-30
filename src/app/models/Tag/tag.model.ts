import { Experto } from "../Experto/experto.model";
import { Itag } from "./itag";

export class Tag implements Itag{
  id: number;
  nombre: String;
  createdAt: Date;
  updateAt: Date;
  expertoList:any []=[];

  constructor( nombre: String, createdAt: Date,  updateAt: Date){

    this.nombre = nombre;
    this.createdAt = createdAt;
    this.updateAt = updateAt;

  }

}
