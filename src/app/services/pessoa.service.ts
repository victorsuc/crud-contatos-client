import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl:string='http://localhost:8080/crud';
  private pessoa:Pessoa;

  constructor(private _http:HttpClient) { }

  getPessoas(): Observable <any> {
    return this._http.get(this.baseUrl+'/pessoas');
  }

  getPessoa(id:Number): Observable <any> {
    return this._http.get(this.baseUrl+'/pessoa/'+id);
  }

  deletePessoa(id:Number): Observable <any> {
    return this._http.delete(this.baseUrl+'/pessoa/'+id);
  }

  createPessoa(pessoa:Pessoa): Observable <any> {
    return this._http.post(this.baseUrl+'/pessoa', JSON.stringify(pessoa), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  updatePessoa(pessoa:Pessoa): Observable <any> {
    return this._http.put(this.baseUrl+'/pessoa', JSON.stringify(pessoa), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  setter(pessoa:Pessoa){
    this.pessoa = pessoa;
  }

  getter(){
    return this.pessoa;
  }
}
