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
import { CarFormComponent } from './components/car-form/car-form.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    SearchComponent,
    CarListFilterComponent,
    CarDetailsComponent,
    CarFormComponent,
    NewsletterComponent,
    AnnouncementsComponent,
    MessagesComponent,
    SettingsComponent,
    FollowingAnnoucementsComponent,
    FollowingSearchComponent,
    HelpComponent,
    ContactComponent,
    InvidualClientRulesComponent,
    BusinessClientRulesComponent,
    PriceListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
