import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User [];
  data: Observable <any>;

  constructor() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'kevin@doe.com',
        registered: new Date('01/05/2020 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Sheila',
        lastName: 'Hollin',
        email: 'sheila@doe.com',
        isActive: false,
        registered: new Date('04/12/2019 10:48:00'),
        hide: true,
      },
    ];

  }

  getData () {
    this.data = new Observable (observer => {
      setTimeout (()=> {
        observer.next (1);
      },1000);

      setTimeout (()=> {
        observer.next (2);
      },1000);
      setTimeout (()=> {
        observer.next (3);
      },1000);
      setTimeout (()=> {
        observer.next (4);
      },1000);

    });

    return this.data;

  }
  getUsers (): Observable <User []> {

    return of(this.users);

  }

  addUser (user: User) {
    this.users.unshift (user);
  }
}
