import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './login.model';
import { NotificationService } from '../../shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // tslint:disable-next-line:member-ordering
  loginForm: FormGroup
  // tslint:disable-next-line:member-ordering
  navigateTo: string

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login() {
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
      response => this.notificationService.notify(response.error.message),
      () => {
        this.router.navigate([atob(this.navigateTo)])
      });
  }

}
