import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { LogInService } from 'src/app/services/logIn.service';

@Component({
  selector: 'app-user-logIn',
  templateUrl: './user-logIn.component.html',
  styleUrls: ['./user-logIn.component.css'],
})
export class UserLogInComponent implements OnInit {
  constructor(private loginSErvice:LogInService,private alertify:AlertifyService, private router:Router) {}

  ngOnInit() {}
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    const token=this.loginSErvice.authUser(loginForm.value)
    if (token){
      localStorage.setItem("token",token.userName)
      this.alertify.success("log in Successfuly")
      this.router.navigate(['/'])
    }
    else{
      this.alertify.error("Wrong Name or password")
    }
    loginForm.reset()
  }
}
