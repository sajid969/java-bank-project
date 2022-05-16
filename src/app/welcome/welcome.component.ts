import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserModel} from './user.model';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  actualToken: string;
  userModel: UserModel = new UserModel();
  hidden = true;
  admin = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  viewProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.actualToken
      })
    };
    this.http.get<UserModel>('http://localhost:8080/users/viewProfile', httpOptions).subscribe(
      newUser => {
        this.userModel = newUser;
        console.table(this.userModel);
      },
      error => console.log(error)
    );
    this.hidden = false;
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.actualToken
      })
    };
    this.http.get('http://localhost:8080/users/logout', httpOptions).subscribe(result => console.log(result), error => console.log(error));
    this.router.navigateByUrl('/login');
  }

  editProfile() {
    this.router.navigateByUrl('/editProfile');
  }

  ngOnInit() {
    this.actualToken = window.localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.actualToken
      })
    };
    this.http.get('http://localhost:8080/users/getRole', httpOptions).subscribe(result => {
      console.log(result);
      if (result.toString() === 'ADMIN') {
        this.admin = true;
      }
    }, error => console.log(error));
  }
  customers() {
    this.router.navigateByUrl('/customers');
  }
  books() {
    this.router.navigateByUrl('/books');
  }
  lendings() {
    this.router.navigateByUrl('/lendings');
  }
  search() {
    this.router.navigateByUrl('/search');
  }
  import() {
    this.router.navigateByUrl('/import');
  }
}
