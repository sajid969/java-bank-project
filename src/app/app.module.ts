import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ImportComponent } from './import/import.component';
import { NewpageComponent } from './newpage/newpage.component';
import { CustomersComponent } from './customers/customers.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { LendingsComponent } from './lendings/lendings.component';
import { AddlendingComponent } from './addlending/addlending.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    EditProfileComponent,
    ImportComponent,
    NewpageComponent,
    CustomersComponent,
    AddcustomerComponent,
    BooksComponent,
    AddbookComponent,
    LendingsComponent,
    AddlendingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
