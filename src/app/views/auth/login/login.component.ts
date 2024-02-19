import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { passwordStrengthValidator } from '@shared/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  username: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', [
    Validators.required,
    passwordStrengthValidator(),
  ]);

  constructor(private fb: FormBuilder, private router: Router) {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  login() {
    console.log('login');
    this.router.navigateByUrl('portal');
  }
}
