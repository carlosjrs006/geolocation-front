import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConsultaEnderecoComponent } from './page/consulta-endereco/consulta-endereco.component';
import { HistoricoConsultasComponent } from './page/historico-consultas/historico-consultas.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'consulta-endereco', component: ConsultaEnderecoComponent},
  { path: 'historico-consultas', component: HistoricoConsultasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
