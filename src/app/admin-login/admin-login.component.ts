import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  token: any;
  loginForm: FormGroup;
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder,
    private router: Router, private auth_S: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email == "admin@gmail.com" && password == "123456") {
      // if (data == data_) {
      this.auth_S.login(email, password).subscribe((res) => {
        if (res && res.token) {
          this.token = res.token; // Assign response to token
          localStorage.setItem('token', this.token); // Store the token directly

          this.router.navigate([`/dashboard`]);
        }
      }, () => {
        this.errorMessage = 'Invalid email or password'; // Update error message on error
      });
    }
  }
}