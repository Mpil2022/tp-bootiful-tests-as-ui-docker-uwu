import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Back} from "../route/back";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _backendURL: any;

  /**
   * Constructor of HttpService, handle all of http requests
   * @param _httpClient Http client to send http requests
   */
  constructor(private _httpClient : HttpClient) {
    this._backendURL = Back.getBackEnd();
  }

  public get(): Observable<any>{
    return this._httpClient.get(this._backendURL.current);
  }

  public post(object: any): Observable<any>{
    return this._httpClient.post(this._backendURL.add + "?num="+ object,null);
  }

}
