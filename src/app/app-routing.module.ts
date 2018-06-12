import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {QuemSomosComponent} from "./quem-somos/quem-somos.component";
import {ContatoComponent} from "./contato/contato.component";
import {NossaVisaoComponent} from "./nossa-visao/nossa-visao.component";
import {ContatoModule} from "./contato/contato.module";
import {ContatoRoutingModule} from "./contato/contato-routing.module";
import {NossaVisaoRoutingModule} from "./nossa-visao/nossa-visao-routing.module";
import {QuemSomosRoutingModule} from "./quem-somos/quem-somos-routing.module";

@NgModule({
  declarations: [
    QuemSomosComponent,
    ContatoComponent,
    NossaVisaoComponent
  ],
  imports : [
    RouterModule.forRoot([]),
    ContatoRoutingModule,
    NossaVisaoRoutingModule,
    QuemSomosRoutingModule
  ], exports : [
    RouterModule
  ]
})
export class AppRoutingModule {

}
