import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './view/create-event.component.html',
  styleUrls: ['./styles/create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hiddeForm(){
    const form_products = (<HTMLFormElement>document.getElementById('cntr-new-product'));
    form_products.hidden = false;
  }
  showOrHiddeForm(){
    const form_products = (<HTMLFormElement>document.getElementById('cntr-new-product'));
    if(form_products.hidden == true){
      form_products.hidden = false;
    }
    else{
      form_products.hidden = true;
    }
  }
  rotateBtn(){
    const btn = (<HTMLButtonElement>document.getElementById('btn-open-links'));
    if(btn.className == "btn-open-links rotate"){
      btn.className = "btn-open-links";
    }
    else{
      btn.className = "btn-open-links rotate";
    }
    this.showOrHiddeLinks()
  }
  showOrHiddeLinks(){
    const container = (<HTMLDivElement>document.getElementById('cntr-links'));
    if(container.className == "cntr-links cntr-opened"){
      container.className = "cntr-links"
    }
    else{
      container.className = "cntr-links cntr-opened"
    }
  }
  operar(){
    const fecha = (<HTMLInputElement>document.getElementById('fecha'));
    console.log(fecha.value)
    const fecha1 = "2022-10-01T12:50";
    console.log(fecha1)
    const fechatrans1 = new Date(fecha1).getTime();
    console.log(fechatrans1)
    console.log("fecha #1: " + fechatrans1)
    const fecha_actualita = new Date().getTime();
    const fechafinal = (fecha_actualita - fechatrans1)/(1000*60*60*24);
    const enteritonomas = Math.trunc(fechafinal)
    console.log(enteritonomas)
    console.log(new Date().toISOString())
  }
  mostrar(){
    const img = (<HTMLInputElement>document.getElementById('file'))
    console.log(img.value);
  }
}
