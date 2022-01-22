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

  /**
   * Execute a get method
   * @param endpoint endpoint that will be triggered, must contain "/:id" reference
   * @param id id of the element that must be fetched
   */
  public get(endpoint: string, id: string): Observable<any>{
    return this._httpClient.get(this._backendURL+endpoint.replace(":id", id));
  }

  /**
   * Execute a post method
   * @param endpoint endpoint that will be triggered
   * @param object new object that will be added, it will be translated to a JSON format
   */
  public post(endpoint: string, object: any): Observable<any>{

    return this._httpClient.post(this._backendURL.addUser, object);
  }

  /**
   * Execute a delete method
   * @param endpoint endpoint that will be triggered, must contain "/:id" reference
   * @param id id of the element that must be deleted
   */
  public delete(endpoint: string, id: string): Observable<any>{
    return this._httpClient.delete(this._backendURL+endpoint.replace(":id", id));
  }

  /**
   * Execute a put method
   * @param endpoint endpoint that will be triggered, must contain "/:id" reference
   * @param id id of the element that must be updated
   * @param object new object that will update
   */
  public put(endpoint: string, id: string, object: any): Observable<any>{
    return this._httpClient.put(this._backendURL+endpoint.replace(":id", id), object);
  }




}
