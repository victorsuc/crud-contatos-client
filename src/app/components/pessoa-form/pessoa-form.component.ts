import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa';
import { Router } from '@angular/router'
import { PessoaService } from '../../services/pessoa.service'

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  private pessoa:Pessoa;
  constructor(private _pessoaService:PessoaService, private _router:Router) { }

  ngOnInit() {
    this.pessoa = this._pessoaService.getter();
  }

  saveForm(){
    if(this.pessoa.id==undefined){
      this._pessoaService.createPessoa(this.pessoa).subscribe((pessoa)=>{
        console.log(pessoa);
        this._router.navigate(['/'])
      },(error)=>{
        console.log(error);
      })
    }else{
      this._pessoaService.updatePessoa(this.pessoa).subscribe((pessoa)=>{
        console.log(pessoa);
        this._router.navigate(['/'])
      },(error)=>{
        console.log(error);
      })
    }
  }

}
