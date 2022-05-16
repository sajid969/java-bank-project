import { Component, OnInit } from '@angular/core';
import {BookModel} from './books.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  hidden = true;
  books: BookModel[];
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
    this.http.get<BookModel[]>('http://localhost:8080/users/getBooks',
      httpOptions).subscribe(result => {
        this.books = result;
        console.table(this.books);
      },
      error => console.log(error));
    this.hidden = false;
  }
  addBook() {
    this.router.navigateByUrl('/addbook');
  }

  menu() {
    this.router.navigateByUrl('/welcome');
  }
}
