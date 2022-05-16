import { Component, OnInit } from '@angular/core';
import {CustomerModel} from './customer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  hidden = true;
  customers: CustomerModel[];
  ok: boolean;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.get<CustomerModel[]>('http://localhost:8080/users/getCustomers',
      httpOptions).subscribe(result => {
        this.customers = result;
        console.table(this.customers);
      },
      error => console.log(error));
    this.hidden = false;
  }
  addCustomer() {
    this.router.navigateByUrl('/addcustomer');
  }

  menu() {
    this.router.navigateByUrl('/welcome');
  }
}
