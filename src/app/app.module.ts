import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarService } from './services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { CarListFilterComponent } from './components/car-list-filter/car-list-filter.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    SearchComponent,
    CarListFilterComponent,
    CarDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
