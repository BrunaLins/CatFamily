import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cat} from '../models/Cat';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) { }
  private apiUrl ='http://localhost:3000/cats';

  getAll(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }
  
  getById(id){
    return this.http.get<Cat>(this.apiUrl+"/"+id);
  }
 
  save(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>('http://localhost:3000/cats', cat);
 }
  create(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>(this.apiUrl, cat);
  }


  delete(id: number): Promise<any>{
    return fetch(this.apiUrl+"/"+id, {
      method: 'DELETE'
    });
  
  
  }
  

}
