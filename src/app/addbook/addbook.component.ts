import { Component, OnInit } from '@angular/core';
import {BookModel} from '../books/books.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  Book: BookModel = new BookModel();
  constructor(private http: HttpClient, private router: Router) { }

  do(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post('http://localhost:8080/users/addBook', this.Book, httpOptions).subscribe();
    this.router.navigateByUrl('/welcome');
  }
  ngOnInit() {
  }
}
