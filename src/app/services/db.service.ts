import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private db: AngularFirestore) {}

  addEmployee(
    name: string,
    fathers_name: string,
    salary: number,
    dob: string,
    doj: string
  ) {
    const id = nanoid();

    return this.db.doc(`employees/${id}`).set({
      name,
      fathers_name,
      salary,
      dob,
      doj,
      id,
    });
  }

  allEmployees() {
    return this.db.collection('employees').valueChanges();
  }

  employeeData(id: string) {
    return this.db.doc(`employees/${id}`).valueChanges();
  }

  // attendance(attendance: any[]) {
  //   return this.db.collection(`attendance/${attendance.name}`)
  // }
}
