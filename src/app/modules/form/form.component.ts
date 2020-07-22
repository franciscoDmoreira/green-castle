import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Cliente } from 'src/app/resources/cliente.class';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  cliente = new Cliente();

  ngOnInit(): void {
  }

  public salvarCliente() {
    console.log(this.cliente);
  }

}
