import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/Tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private httpClient: HttpClient ) { }

  getAllEtiquetas(): Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/etiquetas');
  }


  getAllTagsFilterByName(nombre: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/etiquetas?nombre='+nombre);
  }
  getAllTagsFilterByCreador(creador: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/etiquetas?creador='+creador);
  }
  getAllTagsFilterByFecha(fecha: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/etiquetas?creador='+fecha);
  }
  deletaTag(id: String){
    return this.httpClient.delete('https://backend-erp-jmrg.herokuapp.com/api/etiquetas/'+id);
  }


  createTag(tag: any):Observable<any>{
    return this.httpClient.post('https://backend-erp-jmrg.herokuapp.com/api/etiquetas/',tag);
  }
}
