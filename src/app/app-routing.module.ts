import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {ContatoComponent} from './main/contato/contato.component';
import {CirurgiasComponent} from './main/cirurgias/cirurgias.component';
import {EspecialidadesComponent} from './main/especialidades/especialidades.component';
import {TratamentosComponent} from './main/tratamentos/tratamentos.component';
import {AClinicaComponent} from './main/a-clinica/a-clinica.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "aclinica", component: AClinicaComponent},
  {path: "tratamentos", component: TratamentosComponent},
  {path: "especialidades", component: EspecialidadesComponent},
  {path: "cirurgias", component: CirurgiasComponent},
  {path: "contato", component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
