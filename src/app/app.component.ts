import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Amazon';
  loginForm = new FormGroup({
    mail: new FormControl('vaibhav@gmail.com', [Validators.required, this.validateMail]),
    password: new FormControl('12345678', [this.validatePassword])
  });

  validateMail(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().includes('@')) {
      return null;
    } else {
      return { invalid: true };
    }
  }

  validatePassword(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length >= 8) {
      return null;
    }
    else {
      return { invalid: true };
    }
  }

  users: any | undefined;
  constructor(public dataservice: DataService, public router: Router) { }
  ngOnInit() {
    this.dataservice.getusersData().subscribe((data) => { this.users = data });
    this.dataservice.isUserFound = false;
  }
  user: any | undefined;
  errorflag:boolean=true;
  verify() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].mail === this.loginForm.get('mail')?.value &&
        this.users[i].password === this.loginForm.get('password')?.value) {
        this.user = this.users[i];
        this.dataservice.isUserFound = true;
        this.errorflag=false;
        this.router.navigate([this.users[i].id]);
        break;
      }
    }
    if(this.errorflag===true){
      window.alert("Invalid Login credentials...");
    }
  }
}
