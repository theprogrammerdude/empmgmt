import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: string;
  password!: string;
  uid: string = localStorage.getItem('uid') ?? '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.uid !== '') {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.auth.signin(this.user, this.password).then((res: any) => {
      localStorage.setItem('uid', res.user.uid);
      this.router.navigate(['/dashboard']);
    });
  }
}
