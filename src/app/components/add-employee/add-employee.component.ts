import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  name!: string;
  fathers_name!: string;
  dob!: string;
  doj!: string;
  salary!: number;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  add() {
    this.db
      .addEmployee(
        this.name,
        this.fathers_name,
        this.salary,
        this.dob,
        this.doj
      )
      .then(() => {
        this.name = this.fathers_name = this.dob = this.doj = '';
        this.salary = 0;
      });
  }
}
