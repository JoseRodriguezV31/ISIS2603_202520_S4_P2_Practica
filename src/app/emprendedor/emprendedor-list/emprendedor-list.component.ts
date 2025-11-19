import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  emprendedores: Array<Emprendedor> = [];
  
  constructor(
    private emprendedorService: EmprendedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmprendedores();
  }

  getEmprendedores(): void {
    this.emprendedorService.getEmprendedores().subscribe(emprendedores => {
      this.emprendedores = emprendedores;
    });
  }

  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.router.navigate(['/emprendedores', emprendedor.id]);
  }
}
