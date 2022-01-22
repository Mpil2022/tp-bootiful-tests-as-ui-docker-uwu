import { Component, OnInit } from '@angular/core';
import {HttpService} from "../shared/services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get num(): string {
    return this._num;
  }

  set num(value: string) {
    this._num = value;
  }
  get current(): number {
    return this._current;
  }

  set current(value: number) {
    this._current = value;
  }

  private _current : number;

  private _num : string;

  constructor( private _httpService : HttpService) {
    this._current = 0;
    this._num = "";
  }

  ngOnInit(): void {
    this._httpService.get().subscribe( (value : any) => this._current = value)
  }

  add(){
    this._httpService.post(this._num).subscribe((value => this._current = value))
  }
}
