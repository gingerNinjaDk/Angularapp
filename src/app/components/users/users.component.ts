import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit(): void {
    // Lifecycle method (like a trigger)

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

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
