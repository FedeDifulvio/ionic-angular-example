import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private apiUrl = 'http://localhost:3000/proveedores'; // Reemplaza con la URL real de tu API de proveedores

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}