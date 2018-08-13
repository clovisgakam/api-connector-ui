import { Component, OnInit } from '@angular/core';
import {REACTIVE_DRIVEN_DIRECTIVES} from '@angular/forms/src/directives';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  loginRequest: any = {};
  isLoading = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userId: [ null, [ Validators.required ] ],
      pin: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.isLoading = true;
    setTimeout(_ => {
      this.login();
    }, 3000);
  }

  login(): void {
    this.loginService.login(this.loginRequest)
      .subscribe(resp => {
          console.log(resp);
          this.router.navigateByUrl('consent/:id/confirm');
        },
        error1 => console.log(error1),
        () => this.isLoading = false);
  }

}
