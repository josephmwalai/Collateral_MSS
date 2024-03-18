import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;
  hide: boolean = true;

  constructor(private router: Router) {}

  onSubmit(): void {
    // Implement your form submission logic here
    console.log('Submitting form...');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Simulating a successful login
    // In a real application, you would perform authentication and handle the result accordingly
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Navigate to the home component
      this.router.navigate(['/card']);
    } else {
      this.error = 'Invalid credentials';
    }

    // Reset fields
    this.username = '';
    this.password = '';
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
