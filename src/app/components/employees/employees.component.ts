import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Array<any> = [];

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.allEmployees().subscribe((res) => {
      this.employees = res;
    });
  }
}
