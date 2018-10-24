import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from '../mocks/locations';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocations(): Observable<Location[]> {
    return of(LOCATIONS);
  }
}
