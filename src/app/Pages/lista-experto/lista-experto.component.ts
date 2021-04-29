import { Component, OnInit } from '@angular/core';
import { ExpertoService } from 'src/app/Servicios/ExpertoServicio/experto.service';

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

  constructor( private expertoService: ExpertoService ) { }


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
}
