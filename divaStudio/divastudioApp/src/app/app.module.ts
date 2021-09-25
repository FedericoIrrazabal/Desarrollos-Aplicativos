import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
