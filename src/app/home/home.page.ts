import { Clientes } from './../shared/clientes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clientes: Clientes;

  constructor() {}

  ngOnInit(){
    this.clientes = new Clientes();
  }

  onSubmit(){

  }

}
