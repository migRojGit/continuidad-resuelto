import { Injectable } from '@angular/core';
import { PhotoResource } from '../interfaces/resources/photo-resource.interface';
import { photoResourceCollection } from '../../../assets/resources/photo-resources';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  getImages(): Promise<PhotoResource[]>{
    return Promise.resolve(photoResourceCollection);
  }
}
