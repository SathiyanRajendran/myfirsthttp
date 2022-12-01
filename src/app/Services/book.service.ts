import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authentication/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient,private _auth:AuthserviceService) { }
  saveBook(books: any):Observable<any>{
    const tk=this._auth.getToken();
    return this._httpClient.
    post("https://demohttprequests-a8373-default-rtdb.firebaseio.com/data.json?auth="+ tk,books)
  }
  getBook():Observable<any>{
    const tk=this._auth.getToken();
    return this._httpClient.
    get("https://demohttprequests-a8373-default-rtdb.firebaseio.com/data.json?auth=" +tk)
  }

}
