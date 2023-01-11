import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 valor:string = "Hola mundo";
 valor2:number = 500;
 condicion = true; 
 tipoMoneda!:string;

  cambiar(){
    alert("valor cambiado")
    if (this.condicion) {
      this.tipoMoneda = "USD"
      this.condicion = !this.condicion
    } else{
      this.tipoMoneda = "EUR"
      this.condicion = !this.condicion
    }

    // this.tipoMoneda = document.getElementById("tipoMoneda");
    // alert(this.tipoMoneda)
  }
 

  //  Actividad Asincrona S13

  dato = 
    [
      {
      "Apellido": "Arcila",
      "Casado" : false,
      "Direccion" : "Calle 35 # 43 28",
      "Nombre": "Diego",
      "Telefono": 3859720
      },
      {
        "Apellido": "Bueno",
        "Casado" : false,
        "Direccion" : "CR 16A # 53 28",
        "Nombre": "Kevin",
        "Telefono": 31485579954
        }
    ]

}
