import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../customers/customer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SearchlModel} from './search.modell';
import {SearchbModel} from './search.modelb';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hiddenc = false;
  hiddenb = false;
  cname;
  lendings: SearchlModel[];
  bid;
  lendings2: SearchbModel[];
  ok: boolean;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }
  slbu() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post<SearchlModel[]>('http://localhost:8080/users/getLendingsByUser', this.cname,
      httpOptions).subscribe(result => {
        this.lendings = result;
        console.table(this.lendings);
      },
      error => console.log(error));
    this.hiddenb = false;
  }
  slbb() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post<SearchbModel[]>('http://localhost:8080/users/getLendingsByBook', this.bid,
      httpOptions).subscribe(result => {
        this.lendings2 = result;
        console.table(this.lendings2);
      },
      error => console.log(error));
    this.hiddenc = false;
  }
  menu() {
    this.router.navigateByUrl('/welcome');
  }
}
