import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8083"

  add(cab:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}/cab/createCab`, cab);
  }
  
  getAllCab(): any {
    return this.http.get(` ${this.baseUrl}/cab/getAllCab`);
  }
  deleteCab(id: number): Observable<any> {

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/cab/deleteCab/${id}`,{responseType:'text'});
  }

  searchCab(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cab/getOneCab/${id}`)
  }

  updateCab(cab: object): Observable<object> {
    console.log("Inside upate service class");
    console.log(cab);
    return this.http.put(`${this.baseUrl}/cab/updateCab`,cab);
  }
}
