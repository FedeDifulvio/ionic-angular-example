import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'http://localhost:3000/clientes'; 

  constructor(private http: HttpClient) { }

  // Método para obtener los clientes desde la API
  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}