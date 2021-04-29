import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEtiquetaComponent } from 'src/app/components/add-etiqueta/add-etiqueta.component';
import { EtiquetaService } from 'src/app/Servicios/EtiquetaServicio/etiqueta.service';

@Component({
  selector: 'app-lista-etiqueta',
  templateUrl: './lista-etiqueta.component.html',
  styleUrls: ['./lista-etiqueta.component.scss']
})
export class ListaEtiquetaComponent implements OnInit {

  public listaExpertos = []
  displayedColumns: string[] = ['nombre', 'createdAt','creador','botonBorrar'];
  dataSource: any;
  buscarPorNombre: String =""
  buscarPorCreador: String = ""
  buscarPorFecha: String = ""
  constructor( private etiquetaService: EtiquetaService,private router: Router , public dialog: MatDialog) { }


  ngOnInit(): void {
   this.cargarData();
   this.dataSource = this.listaExpertos;
   console.log(this.dataSource);

  }
  cargarData() {
    this.etiquetaService.getAllEtiquetas().subscribe((respuesta => {this.dataSource = respuesta.content}));
  }

  deleteTag(data:any) {

    this.etiquetaService.deletaTag(data).subscribe(
      (response) => {
        console.log("ok")
        this.router
        .navigateByUrl('/etiquetas', { skipLocationChange: true })
        .then(() => this.router.navigate(['/etiquetas']));
      },
      (error) => {

    } );

  }
  requestNameFilter(){
    this.etiquetaService.getAllTagsFilterByName(this.buscarPorNombre).subscribe((response)=>{

      this.dataSource=response.content
    })

  }
  requestCreadorFilter(){


  }
requestFechaFilter(){

}


  openDialog(){

    this.dialog.open(AddEtiquetaComponent);
  }
}
