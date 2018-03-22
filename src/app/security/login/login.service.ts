
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import { User } from './login.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd } from '@angular/router';


@Injectable()
// tslint:disable-next-line:one-line
export class LoginService {
    constructor(private http: HttpClient,
        private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }

    // tslint:disable-next-line:member-ordering
    user: User;

    // tslint:disable-next-line:member-ordering
    lastUrl: string;

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<User>(`${MEAT_API}/login`,
            {
                email: email,
                password: password
            })
            .do(user => this.user = user);
    }

    logout() {
        this.user = undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)])
    }

}
