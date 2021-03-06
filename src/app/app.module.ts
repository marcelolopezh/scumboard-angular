import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    //PARA TRABAJAR CON ngModule
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
