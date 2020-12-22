import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  //Registrar usuario
  signUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
  //Logear Usuario
  signIn(user){
    return this.http.post<any>(this.URL + '/signin', user);
  }
  //Comprobar Logeado/Usuario
  loggedIn(): Boolean{
    //Si existe token en localStorage return "true", sino return "false"
    // " !! " --> if(localStorage.getItem('token)){}
    return !!localStorage.getItem('token');

  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
