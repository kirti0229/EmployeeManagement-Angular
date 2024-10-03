import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ntspl',
  templateUrl: './ntspl.component.html',
  styleUrls: ['./ntspl.component.css']
})
export class NtsplComponent {
  loginForm: FormGroup;
  showPasswordField: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordField() {
    this.showPasswordField = !this.showPasswordField;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log(this.loginForm.value);
    }
  }
}
