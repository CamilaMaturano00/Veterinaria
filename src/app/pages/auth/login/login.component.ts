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

  constructor(el: ElementRef, router: Router,
              private fb: FormBuilder, private loginService: LoginService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }



  login(){
    this.navigateToHome()
  }

  private navigateToHome(){
  }
}