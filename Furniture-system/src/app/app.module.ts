import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { FurnitureService } from './furniture/furniture.service';
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    CreateFurnitureComponent,
    FurnitureAllComponent,
    FurnitureDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [ 
    AuthService,
    FurnitureService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
