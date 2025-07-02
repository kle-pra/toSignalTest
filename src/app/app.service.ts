import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  #http = inject(HttpClient);
  getUsers(): Observable<any> {
    return this.#http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
