import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Components/Models/registration.models';
import { Login } from '../Components/Models/login.models';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseApiUrl:  string = environment.baseApiUrl



  constructor(private http: HttpClient) { }

  addUsers(addUsers: any):Observable<User[]>{
    return this.http.post<User[]>(this.baseApiUrl + 'api/registration', addUsers);
  }

  loginUsers(login: any):Observable<Login[]>{
    return this.http.post<Login[]>(this.baseApiUrl + 'api/login', login)
  }
}
