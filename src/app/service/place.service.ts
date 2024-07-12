import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8083"

  
  
  getAllPlace(): any {
    return this.http.get(` ${this.baseUrl}/place/getAllPlace`);
  }

  deletePlace(id: number): Observable<any> {

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/place/deletePlace/${id}`,{responseType:'text'});
  }

  searchPlace(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/place/getOnePlace/${id}`)
  }

  updatePlace(place: object): Observable<object> {
    console.log("Inside upate service class");
    console.log(place);
    return this.http.put(`${this.baseUrl}/hotel/updateHotel`,place);
  }
}