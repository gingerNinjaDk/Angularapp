import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from '../../services/data.service';

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
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Lifecycle method (like a trigger)

    this.dataService.getData ().subscribe(data => {
      console.log (data);
    });

    this.dataService.getUsers ().subscribe (users => {
      this.users = users;
      this.loaded = true;
    });

  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser (value);
      this.form.reset();

    }
  }
}
