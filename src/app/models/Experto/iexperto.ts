import { logging } from "selenium-webdriver";
import { Disponibilidad } from "../Disponibilidad/disponibilidad.model";
import { Estado } from "../Estado/estado.model";
import { Tag } from "../Tag/tag.model";

export interface IExperto {
  id: String,
  nombre: String,
  created_at: Date,
  updated_at: Date,
  idEstado: Number,
  idDisponibilidad: Number,
  modalidad: String,
  autonomo: String,
  contacto_telefono: String,
  contacto_email: String,
  contacto_ciudad: String,
  contacto_linkedin: String,
  estado: Estado,
  disponibilidad: Disponibilidad,
  tagList:Tag[]

}
