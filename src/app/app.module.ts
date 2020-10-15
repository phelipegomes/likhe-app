import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { AClinicaComponent } from './main/a-clinica/a-clinica.component';
import { CirurgiasComponent } from './main/cirurgias/cirurgias.component';
import { ContatoComponent } from './main/contato/contato.component';
import { EspecialidadesComponent } from './main/especialidades/especialidades.component';
import { RejuvenescimentoComponent } from './main/rejuvenescimento/rejuvenescimento.component';
import { TratamentosComponent } from './main/tratamentos/tratamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AClinicaComponent,
    CirurgiasComponent,
    ContatoComponent,
    EspecialidadesComponent,
    RejuvenescimentoComponent,
    TratamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
