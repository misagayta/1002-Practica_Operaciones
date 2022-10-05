import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { OperaBasComponent } from './formularios/opera-bas/opera-bas.component';
import { ProductlistComponent } from './products/productlist/productlist.component';

const routes: Routes = [
  {path:'', component: ProductlistComponent},
  {path:'suma', component: OperaBasComponent},
  {path:'cinepolis', component: CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
