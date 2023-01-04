import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent} from './property/property-card/property-card.component';
import { PropertyListComponent} from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { RouterModule,Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLogInComponent } from './user/user-logIn/user-logIn.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:"add-property",component:AddPropertyComponent},
  {path:"property-detail/:id",component:PropertyDetailComponent},
  {path:'user/user-logIn',component:UserLogInComponent},
  {path:'user/user-register',component:UserRegisterComponent},
  {path:'**',component:PropertyListComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLogInComponent,
    UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }