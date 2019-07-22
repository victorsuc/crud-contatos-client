import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service'
import { Pessoa } from '../../pessoa'
@Component({
  selector: 'app-listpessoa',
  templateUrl: './listpessoa.component.html',
  styleUrls: ['./listpessoa.component.css']
})
export class ListpessoaComponent implements OnInit {
  private pessoas:Pessoa[];
  constructor(private _pessoaService:PessoaService) {}

  ngOnInit() {
    this._pessoaService.getPessoas().subscribe((pessoas)=>{
      console.log(pessoas);
      this.pessoas=pessoas;
    },(error)=>{
      console.log(error);
    })
  }

  deletePessoa(pessoa){
    this._pessoaService.deletePessoa(pessoa.id).subscribe((data)=>{
      this.pessoas.splice(this.pessoas.indexOf(pessoa),1);
    },(error)=>{
      console.log(error);
    })
  }

}
