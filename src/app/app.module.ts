import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpessoaComponent } from './components/listpessoa/listpessoa.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
