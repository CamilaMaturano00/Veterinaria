import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  n = 'a';
  v = 'b';
  year = new Date().getFullYear().toString();
  form: FormGroup;

  isLoading = false;

  constructor(el: ElementRef, router: Router,
              private fb: FormBuilder, private loginService: LoginService, private route: ActivatedRoute) {
                this.form = this.fb.group({
                  'userName': ["", [Validators.required]],
                  'password': ["", [Validators.required]]
                }, { updateOn: 'submit' });  }

  ngOnInit() {
  }

  login(){
    this.navigateToHome()
  }

  private navigateToHome(){
  }
}