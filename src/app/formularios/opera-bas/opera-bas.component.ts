import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent implements OnInit {

  num1='';
  num2='';
  n='';
  
  
  resultado:number=0;
  imprimir='';
  texto:string[]=[];


  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  tabla(){
    let n:number = parseInt(this.n);
    let texto : string[]=[];
    for(let i=1; i<=10; i++){
      this.resultado = n *i;
      texto.push ( i + ' x '+n+' = '+this.resultado);
      
    }
    this.texto=texto;
    
  }


 


  constructor() { }

  ngOnInit(): void {
  }

}
