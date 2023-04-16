import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public minPwLength = 6;
  public loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(this.minPwLength),
    ]),
  });

  public ngOnInit(): void {
    this.loginForm;
  }

  public onSubmit(): void {
    console.log(this.loginForm);
  }
}
