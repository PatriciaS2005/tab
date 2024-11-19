import { DeputadosService } from './../model/deputados.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { deputados } from '../model/deputados';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  formBusca: FormGroup
  deputados: deputados | undefined

  constructor(private fb: FormBuilder, private ds: DeputadosService){
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]]
    })
    this.deputados = undefined
  }
  buscar(){
    const nome = this.formBusca.value.nome
    this.ds.buscarDeputadoPorNome(nome).subscribe(
      (      res: deputados | undefined) => {
        this.deputados = res
      }
    )
  }

}
