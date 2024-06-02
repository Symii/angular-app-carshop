import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListFilterComponent } from './components/car-list-filter/car-list-filter.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {
    path: 'cars-filtered/:brand/:priceFrom/:priceTo',
    component: CarListFilterComponent,
  },
  {
    path: 'cars-filtered/:brand/:priceTo',
    component: CarListFilterComponent,
  },
  {
    path: 'cars-filtered/:brand',
    component: CarListFilterComponent,
  },
  { path: 'car-detail/:id', component: CarDetailsComponent },
  { path: 'cars', component: CarListComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
