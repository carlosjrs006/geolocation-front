import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEnderecoServices {

  //private apiUrl = 'http://localhost:8080/geolocation';
  private apiUrl = 'https://geolocation-api-production.up.railway.app/geolocation';

  constructor(private http: HttpClient) { }

  consultaEndereco(position: any):Observable<any>{
    return this.http.post<any>(this.apiUrl,{longitude: position.lng, latitude: position.lat});
  }

  getHistoricoConsultas(pageNumber?: number, pageSize?: number): Observable<any> {
    let url = `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }


}
