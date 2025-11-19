import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmprendedorListComponent } from './emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor-detail/emprendedor-detail.component';



@NgModule({
  declarations: [
    EmprendedorListComponent,
    EmprendedorDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EmprendedorListComponent,
    EmprendedorDetailComponent
  ]
})
export class EmprendedorModule { }
