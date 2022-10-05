import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductoFiltroPipe } from './product/producto-filtro.pipe';
import { OperaBasComponent } from './formularios/opera-bas/opera-bas.component';
import { MenuComponent } from './menu/menu.component';

import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductoFiltroPipe,
    OperaBasComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
