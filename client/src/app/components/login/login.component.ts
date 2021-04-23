import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchResult } from '@apollo/client/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

const GETUSER = gql`
  query getUserByUsername($username: String!){
    getUserByUsername(username: $username) {
      id
      username
      email
      password
    }
  }`

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm: FormGroup;

  user: any

  loading: boolean = true

  constructor(
    private router: Router,
    private apollo: Apollo,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
  ) {
    this.loginForm = this.fb.group({
      username: ['admin', [
        Validators.required
      ]],
      password: ['1234', [
        Validators.required,
        Validators.pattern('^.{5,10}$')
      ]],
    })
  }

  get username(): any {
    return this.loginForm.get('username');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  async submit($event: MouseEvent) {
    $event.preventDefault();

    const { username, password } = this.loginForm.value;

    this.apollo.watchQuery({
      query: GETUSER,
      variables: { username }

    }).valueChanges.subscribe(async(result: any) => {
      const user = await result.data.getUserByUsername
      console.log(user.id)

      if (user.password === password) {
        this.cookieService.set('userId', user.id)
        this.router.navigate([`/home`]);
        this.snackBar.open('Welcome back', 'Thank you', {
          duration: 2000,
        });
      } else {
        this.snackBar.open('Login Failed', 'Sorry', {
          duration: 2000,
        });
      }
    })
  }


  ngOnInit(): void {

  }

}
