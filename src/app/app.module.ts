import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpessoaComponent } from './components/listpessoa/listpessoa.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaService } from './services/pessoa.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

const appRoutes:Routes=[
  {path:'', component:ListpessoaComponent},
  {path:'op', component:PessoaFormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListpessoaComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
