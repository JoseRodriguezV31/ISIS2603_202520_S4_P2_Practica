import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnInit {
  emprendedorDetail: EmprendedorDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emprendedorService: EmprendedorService
  ) { }

  ngOnInit(): void {
    this.getEmprendedorDetail();
  }

  getEmprendedorDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.emprendedorService.getEmprendedorDetail(id).subscribe(emprendedorDetail => {
      this.emprendedorDetail = emprendedorDetail;
    });
  }

  volverAlListado(): void {
    this.router.navigate(['/emprendedores']);
  }
}
