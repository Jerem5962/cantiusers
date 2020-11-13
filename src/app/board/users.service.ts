import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API = "";
@Injectable({
  providedIn: 'root'
})
export class UsersService{


  constructor(private http: HttpClient) { }

  getAllUsers(){
    this.http.get(API)
  }

}
