import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../validators/MustMatch";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registration: FormGroup;
  visibility = false;
  @ViewChild('password') passwordInput:ElementRef | any;

  constructor(private fb: FormBuilder) {
    this.registration = this.fb.group({
      login: ['', [Validators.required,Validators.minLength(5)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      repeatedPassword: ['',[Validators.required,Validators.minLength(8)]],
      email: ['', Validators.email]
    },{
      validator: MustMatch('password','repeatedPassword')
    });
  }

  ngOnInit(): void {

  }

  visibility_change(){
    this.visibility ? this.visibility = false : this.visibility = true;
  }

}
