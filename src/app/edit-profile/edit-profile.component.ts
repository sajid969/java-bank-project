import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserModel} from './user.model';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userModel: UserModel = new UserModel();
  response = '';
  secondResponse = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  do() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: window.localStorage.getItem('token')
      })
    };
    this.http.post('http://localhost:8080/users/updateProfile', this.userModel,
      httpOptions).subscribe(result => {console.log(result); alert('profile was updated'); },
      error => console.log(error));
    this.response = 'UPDATED PROFILE';
    this.secondResponse = 'true';
  }

  ngOnInit() {
  }

  menu() {
    this.router.navigateByUrl('/welcome');
  }
}
