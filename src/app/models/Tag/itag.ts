import { Experto } from "../Experto/experto.model";

export interface Itag {
  id: number,
  nombre: String,
  createdAt: Date,
  updateAt: Date,
  expertoList: Experto[]

}
