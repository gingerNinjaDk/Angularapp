import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User [];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = false;

  constructor() { }

  ngOnInit(): void {  // Lifecycle method (like a trigger)

    this.users = [
      {
         firstName: 'John',
         lastName: 'Doe',
         age: 31,
         address: {
           street: 'Lillegrund 83',
           city: 'Copenhagen',
           state: 'DK'
         },
         image: 'https://picsum.photos/200/300'
         },
       {
         firstName: 'Kevin',
         lastName: 'Doe',
         age: 41,
         address: {
           street: 'Lillegrund 81',
           city: 'Copenhagen',
           state: 'DK'
         },
         image: 'https://picsum.photos/200/300'
       },
       {
         firstName: 'Sheila',
         lastName: 'Hollin',
         age: 51,
         address: {
           street: 'Longacre 300',
           city: 'Bridgend',
           state: 'Mid Glam'
         },
         image: 'https://picsum.photos/200/300'
       }

     ];


    this.addUser ({
        firstName: 'Adam',
        lastName: 'Weismann',
        age: 51,
        address: {
          street: 'Istegade 300'
        },
        image: 'https://picsum.photos/200/300'
      })


  }

  addUser (user: User) {
    this.users.push (user);

  }
}
