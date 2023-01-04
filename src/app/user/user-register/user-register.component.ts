import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: User;
  userSubmited!: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    this.CreatRegisterationForm();
  }
  CreatRegisterationForm() {
    this.registerForm = new FormGroup(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, Validators.required),
      },
      this.matchPassword
    );
  }

  onSubmit() {
    this.userSubmited = true;
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      this.userService.addUser(this.userData());
      this.registerForm.reset();
      this.userSubmited = false;
    }
    console.log(this.registerForm);
  }
userData():User{
  return this.user={
    userName:this.userName?.value,
    email:this.email?.value,
    password:this.password?.value,
    mobile:this.mobile?.value,
  }
}

  matchPassword(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }
  ////////////////////////////////////////////////////////////////////////
  //getter methods for all form controlers
  ///////////////////////////////////////////////////////////////////////
  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get mobile() {
    return this.registerForm.get('mobile');
  }
}
