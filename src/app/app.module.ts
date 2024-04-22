import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConsultaEnderecoComponent } from './page/consulta-endereco/consulta-endereco.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { HistoricoConsultasComponent } from './page/historico-consultas/historico-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConsultaEnderecoComponent,
    HistoricoConsultasComponent
  ],
  exports:[
    HomeComponent,
    HeaderComponent,
    ConsultaEnderecoComponent,
    HistoricoConsultasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [
    LoadingInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-br'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
