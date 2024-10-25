import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  proveedores: any[] = [];

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedoresService.getProveedores().subscribe((data) => {
      this.proveedores = data;
    });
  }

}