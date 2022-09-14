import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/userService';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  userForm: FormGroup;

  dataSource = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.loadAllUsers();
  }

  loadAllUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      //this.bills = response;
      this.dataSource = response;
      console.log(response);
    });
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
