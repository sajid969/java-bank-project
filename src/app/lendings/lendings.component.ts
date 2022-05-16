import { Component, OnInit } from '@angular/core';
import {LendingModel} from './lendings.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {

  hidden = true;
  Lendings: LendingModel[];
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
    this.http.get<LendingModel[]>('http://localhost:8080/users/getLendings',
      httpOptions).subscribe(result => {
        this.Lendings = result;
        console.table(this.Lendings);
      },
      error => console.log(error));
    this.hidden = false;
  }
  addLending() {
    this.router.navigateByUrl('/addlending');
  }

  menu() {
    this.router.navigateByUrl('/welcome');
  }
}
