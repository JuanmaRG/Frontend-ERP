import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Experto } from 'src/app/models/Experto/experto.model';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpertoService } from 'src/app/Servicios/ExpertoServicio/experto.service';
import { Tag } from 'src/app/models/Tag/tag.model';
import { EtiquetaService } from 'src/app/Servicios/EtiquetaServicio/etiqueta.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-add-experto',
  templateUrl: './add-experto.component.html',
  styleUrls: ['./add-experto.component.scss']
})
export class AddExpertoComponent implements OnInit {


  nombre: any;
  created_at: any;
  updated_at:any;
  idEstado: any;
  idDisponibilidad: any;
  modalidad: any;
  autonomo: any;
  contacto_telefono: any;
  contacto_email: any;
  contacto_ciudad: any;
  contacto_linkedin: any;
  estado: any;
  disponibilidad: any;

  etiquetasSeccion: any;

  dataSource: any;

  public workStatuses = [
    { id: 1, description: 'Mañanas' },
    { id: 2, description: 'Tardes' },
    { id: 3, description: 'Completos' },
    { id: 4, description: 'Findes' }
  ];
  experto: Experto
  tag: any


  constructor(public dialogRef: MatDialogRef<AddExpertoComponent>, private etiquetaService: EtiquetaService, private expertoService: ExpertoService) { }

  ngOnInit(): void {
    this.getExistTags();
  }
  crearExperto(){

  }

  dialogClose(){
    this.dialogRef.close();
  }

  getExistTags(){

    this.etiquetaService.getAllEtiquetas().subscribe((respuesta => {this.dataSource = respuesta.content}));
    console.log(this.dataSource)

  }

  createExperto(){

    let experto = {
      nombre : this.nombre,

      tagList : [],
      idEstado: 3,
      idDisponibilidad: this.disponibilidad,
      contacto_telefono: this.contacto_telefono,
      contacto_email : this.contacto_email,
      contacto_ciudad: this.contacto_ciudad,
      contacto_linkedin: this.contacto_linkedin

    }
    experto.tagList.push(new Tag(this.etiquetasSeccion,new Date(),new Date()));



    this.expertoService.createExperto(experto).subscribe(
      (response) => {
        this.dialogRef.close();
      },
      (error) => {

      }
    );

  }

}
