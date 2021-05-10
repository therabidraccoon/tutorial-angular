import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { JWTService } from './utils/jwt.service';
import { HomeComponent } from './components/home/home.component';
import { PrimoComponent } from './components/primo/primo.component';
import { PadreComponent } from './components/padre/padre.component';
import { FiglioComponent } from './components/figlio/figlio.component';
import { TestDirettiveComponent } from './components/test-direttive/test-direttive.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, PrimoComponent, PadreComponent, FiglioComponent, TestDirettiveComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [LoginService, JWTService],
  bootstrap: [AppComponent],
})
export class AppModule {}
