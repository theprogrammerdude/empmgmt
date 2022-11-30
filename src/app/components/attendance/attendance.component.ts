import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  employees: Array<any> = [];
  attendance: Array<any> = [];
  date!: number;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.date = Date.now();

    this.db.allEmployees().subscribe((res: any) => {
      this.employees = res;
    });
  }

  next() {}
}
