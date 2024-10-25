import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: any[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    // Llamada al servicio para obtener los clientes
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

}