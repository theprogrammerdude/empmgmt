import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  id!: string;
  data!: Map<string, string>;

  constructor(private db: DbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
    });

    this.db.employeeData(this.id).subscribe((res: any) => {
      this.data = res;
    });
  }
}
