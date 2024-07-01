import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListFilterComponent } from './components/car-list-filter/car-list-filter.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { AnnouncementsComponent } from './components/myaccount/announcements/announcements.component';
import { MessagesComponent } from './components/myaccount/messages/messages.component';
import { SettingsComponent } from './components/myaccount/settings/settings.component';
import { FollowingAnnoucementsComponent } from './components/following/annoucements/annoucements.component';
import { FollowingSearchComponent } from './components/following/search/search.component';
import { HelpComponent } from './components/misc/help/help.component';
import { ContactComponent } from './components/misc/contact/contact.component';
import { InvidualClientRulesComponent } from './components/misc/invidual-client-rules/invidual-client-rules.component';
import { BusinessClientRulesComponent } from './components/misc/business-client-rules/business-client-rules.component';
import { PriceListComponent } from './components/misc/price-list/price-list.component';

const routes: Routes = [
  {
    path: 'osobowe/lista/:brand/:body/:yearProducedFrom/:priceFrom/:priceTo/:fuelType',
    component: CarListFilterComponent,
  },
  { 
    path: 'osobowe/oferta/:brand/:carModel/:year/:power/:id',
    component: CarDetailsComponent 
  },
  {
    path: 'obserwowane/ogloszenia',
    component: FollowingAnnoucementsComponent,
  },
  {
    path: 'obserwowane/wyszukiwania',
    component: FollowingSearchComponent,
  },
  { path: 'moje-konto/ogloszenia', component: AnnouncementsComponent },
  { path: 'pomoc', component: HelpComponent },
  {
    path: 'regulamin-dla-klientow-indywidualnych',
    component: InvidualClientRulesComponent,
  },
  {
    path: 'regulamin-dla-klientow-biznesowych',
    component: BusinessClientRulesComponent,
  },
  {
    path: 'cennik',
    component: PriceListComponent,
  },
  { path: 'kontakt', component: ContactComponent },
  { path: 'moje-konto/wiadomosci', component: MessagesComponent },
  { path: 'moje-konto/ustawienia', component: SettingsComponent },
  { path: 'osobowe/nowe-ogloszenie', component: CarFormComponent },
  { path: 'cars', component: CarListComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
