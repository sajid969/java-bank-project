import { Component, OnInit } from '@angular/core';
import {AddLendingModel} from './addlending.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addlending',
  templateUrl: './addlending.component.html',
  styleUrls: ['./addlending.component.css']
})
export class AddlendingComponent implements OnInit {
  lending: AddLendingModel = new AddLendingModel();
  constructor(private http: HttpClient, private router: Router) { }

  do(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post('http://localhost:8080/users/addLendings', this.lending, httpOptions).subscribe();
    this.router.navigateByUrl('/welcome');
  }
  ngOnInit() {
  }
}
