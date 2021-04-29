import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  buscarPorNombre: String
  buscarPorEstado: String
  buscarPorEtiqueta: String
  displayedColumns: string[] = ['filtroNombre',  'FiltroEstado', 'filtroEtiqueta','filtroPuntuacion'];
  dataSource = [];

  constructor() { }




  ngOnInit(): void {
    this.buscarPorEstado="";
    this.buscarPorEtiqueta="";
    this.buscarPorNombre="";
  }

}
