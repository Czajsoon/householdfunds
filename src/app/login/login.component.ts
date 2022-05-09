import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visibility = false;
  @ViewChild('password') passwordInput:ElementRef | any;
  logging: FormGroup;
  constructor(private fb: FormBuilder) {
    this.logging = this.fb.group({
      log: ['', [Validators.required]],
      passw: ['', [Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  visibility_change(){
    this.visibility ? this.visibility = false : this.visibility = true;
  }
}
