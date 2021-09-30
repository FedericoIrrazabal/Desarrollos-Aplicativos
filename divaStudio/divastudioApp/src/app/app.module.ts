import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";





@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
