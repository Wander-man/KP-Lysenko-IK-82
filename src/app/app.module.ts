import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';


const routes = [
  {path: '', component: HomePageComponent},
  {path: 'settings', component: SettingsPageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SettingsPageComponent,
    HomePageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
