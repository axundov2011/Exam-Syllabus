import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DersListComponent } from "./ders-list/ders-list.component";
import { SagirdListComponent } from "./sagird-list/sagird-list.component";
import { ImtahanListComponent } from "./imtahan-list/imtahan-list.component";

@NgModule({
    declarations: [
      AppComponent,
      ImtahanListComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      DersListComponent,
      SagirdListComponent,
      ImtahanListComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

  export class AppModule{ }