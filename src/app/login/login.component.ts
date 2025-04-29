import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
  // username = '';
  // password = '';

  // constructor(private router: Router) {}

  // login() {
  //   if (this.username === 'admin' && this.password === 'password') {
  //     localStorage.setItem('authToken', 'dummy-token');
  //     this.router.navigate(['/content']);
  //   } else {
  //     alert('Invalid credentials!');
  //   }
  // }
  
// }


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onLogin() {
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'dummy-token');
      this.router.navigate(['/content']);
    }
  }
}

