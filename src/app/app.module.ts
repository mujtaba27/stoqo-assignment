import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StoreListComponent } from './store-list/store-list.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { JwtInterceptor} from "./services/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DataTableModule} from "angular-6-datatable";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./filter/filterPipe";
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    StoreListComponent,
    DetailListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
