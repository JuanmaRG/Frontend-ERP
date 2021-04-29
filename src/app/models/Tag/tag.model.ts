import { Experto } from "../Experto/experto.model";
import { Itag } from "./itag";

export class Tag implements Itag{
  id: number;
  nombre: String;
  createdAt: Date;
  updateAt: Date;
  expertoList: Experto[];

  constructor(id: number, nombre: String, createdAt: Date,  updateAt: Date, expertoList: Experto[]){
    this.id = id;
    this.nombre = nombre;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
    this.expertoList = expertoList;
  }

}
