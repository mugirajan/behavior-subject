import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  serviceText= new Subject<any>();
}
