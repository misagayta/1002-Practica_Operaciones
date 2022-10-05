import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  nombre='';
  cantCompradores='';
  cantVoletas='';
  tarjeta=false;
  resultado ='';
  resTotal='';

  calcular(){
    let cantVoletas:number =parseInt(this.cantVoletas);
    let cantVoletas2:number =parseInt(this.cantVoletas);
    let resultado: number = 0;
    let resTotal: number = 0;

    cantVoletas = parseInt(this.cantVoletas) / parseInt(this.cantCompradores);

    if(cantVoletas>7){
      this.resultado='El maximo de boletas son 7 por persona',{style:"text-color: red"};
      this.resTotal='El maximo de boletas son 7 por persona';
    }
    else{
      

      resultado = this.calculaDescuento(cantVoletas);

      resultado= this.calcularTarjeta(this.tarjeta, resultado);

      

      resTotal = this.calculaDescuento(cantVoletas2);

      resTotal= this.calcularTarjeta(this.tarjeta, resTotal);

      this.resultado = resultado.toString();
      this.resTotal = resTotal.toString();
      
    }

    

  }

  calcularTarjeta(select: boolean, precio: number){
    let descuento = 0;
    let resultado = 0;

    if(select== true){
      descuento = 0.90;
    }
    else{
      
      descuento = 1;
    }
    
    resultado=precio*descuento;

    return resultado;
  }

  calculaDescuento(cantVoletas: number){
    let resultado: number=0;
    let descuento: number=0;
    let precio: number = 12;
    let total: number = 0;

    if(cantVoletas>5){
      descuento = 0.85;
    }
    else if(cantVoletas>=3 && cantVoletas <=5){
      descuento = 0.90;
    }
    else{
      descuento = 1;
    }

    total = cantVoletas * precio;
    resultado = total * descuento;

    return resultado;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
