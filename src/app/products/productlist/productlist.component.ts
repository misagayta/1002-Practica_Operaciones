import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/product/producto';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';


  showImage():void{
    this.muestraImg=!this.muestraImg;

  }


  constructor() { }

  ngOnInit(): void {

    
  }

  productos:IProducto[]=[
    
    {
    "productoId" :1,
    "Modelo": "Bochito",
    "Descripcion":"$ puertas familiar",
    "year": "Febrero 3 2028",
    "Precio": 440000,
    "Marca": "Nissa",
    "Color": "Azulito",
    "ImagenURL": "https://vochomania.mx/wp-content/uploads/2021/12/image00044.jpg"
    },
    {
      "productoId" :2,
      "Modelo": "Acaricias",
      "Descripcion":"$ puertas familiar",
      "year": "Febrero 3 2028",
      "Precio": 440000,
      "Marca": "Nissa",
      "Color": "Azulito",
      "ImagenURL": "https://vochomania.mx/wp-content/uploads/2021/12/image00044.jpg"
      },
      {
        "productoId" :3,
        "Modelo": "Chevelle70",
        "Descripcion":"$ puertas familiar",
        "year": "Febrero 3 2028",
        "Precio": 440000,
        "Marca": "Nissa",
        "Color": "Azulito",
        "ImagenURL": "https://vochomania.mx/wp-content/uploads/2021/12/image00044.jpg"
      },
      {
        "productoId" :4,
        "Modelo": "Bochito",
        "Descripcion":"$ puertas familiar",
        "year": "Febrero 3 2028",
        "Precio": 440000,
        "Marca": "Nissa",
        "Color": "Azulito",
        "ImagenURL": "https://vochomania.mx/wp-content/uploads/2021/12/image00044.jpg"
      },
    
  ]

 

}
