import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User [];
  showExtended: boolean = false;
  loaded: boolean = true;
  enableAdd: boolean = true;

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
         isActive: true,
         registered: new Date ('01/02/2020 08:30:00')
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
         registered: new Date ('01/05/2020 08:30:00')
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
         isActive: false,
         registered: new Date ('04/12/2019 10:48:00')
       }

     ];



  }

  addUser (user: User) {
    this.users.push (user);
  }

  fireEvent (e) {
    console.log ('Clicked');
  }
}
