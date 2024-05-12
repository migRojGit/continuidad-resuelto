import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TableUser } from '../interfaces/table-user.interface';
import { LocalResponse } from '../interfaces/local-response.interface';
import { photoResourceCollection } from '../../../assets/resources/photo-resources';
import { PhotoResource } from '../interfaces/resources/photo-resource.interface';
import { Location } from '../interfaces/new-section/location-collection.interface';

@Injectable({
  providedIn: 'root'
})
export class NewSectionService {

  private URL_API: string = environment.URL_HTTP;
  private photoResource: PhotoResource[] = photoResourceCollection;

  constructor(
    private httpClient  : HttpClient
  ) { }

  getAllContent(): Observable<TableUser[]> {
    return this.httpClient.get<LocalResponse>(`${this.URL_API}/?results=10`)
      .pipe(map(({ results }) => {
        return results.map((result) => {
          return {
            uuid: result.login.uuid,
            name: `${result.name.first } ${ result.name.last }`,
            age: result.dob.age,
            username: result.login.username,
            date: result.registered.date,
            location: result.location.country,
            picture: result.picture.medium,
            password: result.login.password,
            locationPicture: this.photoResource.find(({title}) => {
             return title === result.location.country
            })?.itemImageSrc
          }
        })
      }));
  }

  getAllLocations(): Location[] {
    return this.photoResource.map(({title, itemImageSrc, code}) => {
      return {
        title,
        itemImageSrc,
        code
      }
    });
  }
}


