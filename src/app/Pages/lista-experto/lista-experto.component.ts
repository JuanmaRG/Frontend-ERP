import { Component, OnInit } from '@angular/core';
import { AddExpertoComponent } from 'src/app/components/add-experto/add-experto.component';
import { ExpertoService } from 'src/app/Servicios/ExpertoServicio/experto.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-experto',
  templateUrl: './lista-experto.component.html',
  styleUrls: ['./lista-experto.component.scss']
})




export class ListaExpertoComponent implements OnInit {
  public listaExpertos = []
  displayedColumns: string[] = ['nombre', 'estado', 'tagList', 'puntuacion'];
  dataSource: any;

  buscarPorNombre: String =""
  buscarPorEstado: String = ""
  buscarPorEtiqueta: String = ""

  constructor( private expertoService: ExpertoService, public dialog: MatDialog ) { }


  ngOnInit(): void {
   this.cargarData();
   this.dataSource = this.listaExpertos;
   console.log(this.dataSource);


  }
  cargarData() {
    this.expertoService.getAllExperts().subscribe(respuesta => {this.dataSource = respuesta.content});
  }

  requestNameFilter(){
    this.expertoService.getAllExpertsFilterByName(this.buscarPorNombre).subscribe(respuesta => {
      this.dataSource = respuesta.content; console.log(respuesta.content) }

      );
  }
  requestStateFilter(){
  this.expertoService.getAllExpertsFilterByEstado(this.buscarPorEstado).subscribe(respuesta =>
    {
      this.dataSource = respuesta.content;
    });
}

requestTagFilter(){
  this.expertoService.getAllExpertsFilterByTag(this.buscarPorEtiqueta).subscribe(respuesta =>
    {
      this.dataSource = respuesta.content;
    });

}

openDialog(){
  this.dialog.open(AddExpertoComponent);
}
/*
getColor(): string {
  switch (this.e) {
    case 1:
      return '#EF4816';
    case 2:
      return '#EA631F';
    case 3:
      return '#EEAE38';
    default:
      return '#57B9B0';
  }
}*/
}
