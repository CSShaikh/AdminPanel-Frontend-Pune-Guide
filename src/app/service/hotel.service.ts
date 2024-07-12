import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8083"

  createHotel(hotel:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}/hotel/createHotel`, hotel);
  }
  
  getAllHotel(): any {
    return this.http.get(` ${this.baseUrl}/hotel/getAllHotel`);
  }
  deleteHotel(id: number): Observable<any> {

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/hotel/deleteHotel/${id}`,{responseType:'text'});
  }

  searchHotel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotel/getOneHotel/${id}`)
  }

  updateHotel(hotel: object): Observable<object> {
    console.log("Inside upate service class");
    console.log(hotel);
    return this.http.put(`${this.baseUrl}/hotel/updateHotel`,hotel);
  }
}