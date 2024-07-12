import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ensure styleUrls is correct, not styleUrl
  })export class LoginComponent {
    admin: Admin;
  errorMessage: string | undefined;

  constructor(private router: Router) {
    this.admin = new Admin(0, '', '', ''); // Initialize with default values
  }

  onSubmit() {
    // Mock authentication
    if (this.admin.userName === 'admin' && this.admin.password === 'admin' && this.admin.email==='admin1@gmail.com') {
      localStorage.setItem('admin', JSON.stringify(this.admin));
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
