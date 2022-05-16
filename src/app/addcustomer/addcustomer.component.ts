import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../customers/customer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customer: CustomerModel = new CustomerModel();
  constructor(private http: HttpClient, private router: Router) { }

  do(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post('http://localhost:8080/users/addCustomer', this.customer, httpOptions).subscribe();
    this.router.navigateByUrl('/welcome');
  }
  ngOnInit() {
  }
}
