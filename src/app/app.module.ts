import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarService } from './services/car.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CarListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
