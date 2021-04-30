import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Experto } from 'src/app/models/Experto/experto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertoService {

  constructor(private httpClient: HttpClient ) { }

  getAllExperts(): Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/expertos');
  }

  getAllExpertsFilterByEstado(estado: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/expertos?estado='+estado);
  }

  getAllExpertsFilterByName(nombre: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/expertos?nombre='+nombre);
  }

  getAllExpertsFilterByTag(tag: String):Observable<any>{
    return this.httpClient.get<any>('https://backend-erp-jmrg.herokuapp.com/api/expertos?etiquetas='+tag);
  }

  createExperto(experto: any):Observable<any>{
    return this.httpClient.post('https://backend-erp-jmrg.herokuapp.com/api/expertos',experto);
  }

}
