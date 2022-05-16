import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ImportComponent} from './import/import.component';
import {CustomersComponent} from './customers/customers.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {BooksComponent} from './books/books.component';
import {AddbookComponent} from './addbook/addbook.component';
import {LendingsComponent} from './lendings/lendings.component';
import {AddlendingComponent} from './addlending/addlending.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {path: '', component: LoginComponent}, {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent}, {path: 'login', component: LoginComponent},
  {path: 'editProfile', component: EditProfileComponent}, {path: 'import', component: ImportComponent},
  {path: 'customers', component: CustomersComponent}, {path: 'addcustomer', component: AddcustomerComponent},
  {path: 'books', component: BooksComponent}, {path: 'addbook', component: AddbookComponent},
  {path: 'lendings', component: LendingsComponent}, {path: 'addlending', component: AddlendingComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
