import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalResponse } from '../interfaces/local-response.interface';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly APIURL_USUARIOS = environment.URL_HTTP;
  private userCollection: Result[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getAllContent(): Observable<LocalResponse> {
    return this.http.get<LocalResponse>(`${this.APIURL_USUARIOS}/?results=20`);
  }

  saveCollection(persons: Result[]): Result[]{
    this.userCollection = persons;
    return this.userCollection;
  }

  deleteUser(uuid: string): Result[]{
    this.userCollection = this.userCollection.filter(user => user.login.uuid !== uuid);
    return this.userCollection;
  }

  getActualPersons(): Result[]{
    return this.userCollection;
  }
}
