import {Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Component ({
  selector: 'app-user',
 // template: '<h2>John Doe</h2>'
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css']

})

export class UserComponent implements OnInit
 {

  user: User;

  // Methods
  constructor() {


  }

  ngOnInit () {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 31,
      address: {
        street: 'Lillegrund 83',
        city: 'Copenhagen',
        state: 'DK'
      }
    }
  }

 }




