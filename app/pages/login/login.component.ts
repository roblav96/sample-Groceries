// 

import {Component} from '@angular/core';
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";



@Component({
	selector: 'my-app',
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
	providers: [UserService],
})



export class LoginPage {

	user: User
	isLoggingIn = true

	constructor(
		private _userService: UserService,
		private _router: Router
	) {
		this.user = new User();
		this.user.email = "rob@gmx.com";
		this.user.password = "abc123";
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}
	submit() {
		if (this.isLoggingIn) {
			this.login();
		} else {
			this.signUp();
		}
	}
	login() {
		this._userService.login(this.user).subscribe(() => {
			this._router.navigate(["/list"])
		}, (error) => {
			alert("Unfortunately we could not find your account." + JSON.stringify(error.json()))
		});
	}
	signUp() {
		this._userService.register(this.user).subscribe(() => {
			alert("Your account was successfully created.");
			this.toggleDisplay();
		}, (error) => {
			alert("Unfortunately we were unable to create your account." + JSON.stringify(error.json()))
		});
	}

}

