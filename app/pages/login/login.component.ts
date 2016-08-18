// 

import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {setHintColor} from "../../utils/hint-util";
import {TextField} from "ui/text-field";
// import * as application from 'application'
// var colors = require('ansicolors')
// import definition = require("console");
// import trace = require("trace");
// declare let print: any



@Component({
	selector: 'my-app',
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
	providers: [UserService],
})

export class LoginPage implements OnInit {

	user: User
	isLoggingIn = true
	@ViewChild("container") container: ElementRef;
	@ViewChild("email") email: ElementRef;
	@ViewChild("password") password: ElementRef;

	constructor(
		private _userService: UserService,
		private _router: Router,
		private page: Page
	) {
		this.user = new User();
		this.user.email = "rob@gmx.com";
		this.user.password = "abc123";

		// console.log("\n================");
		// console.log('tnsconsole >', tnsconsole)
		// console.dir(tnsconsole);
		// console.log('typeof tnsconsole >', typeof tnsconsole)
		// console.log(colors);
		// console.dir(colors);
		// console.log(colors.green('boobies'))

		// NSLog('LIKE WTF NSLog???')

		// console.log(colors.green('boobies'))
		// console.dir(colors.green('boobies'))

		// trace.write('Debug', 'BOOBIES', 1)

		// global.tnsconsole.log('this.user >', this.user)
		// global.tnsconsole.dump('this.user >', this.user)
		global.tnsconsole.log('this.user', this.user)
		global.tnsconsole.info('this.user.email', this.user.email)
		global.tnsconsole.warn('this.user.password', this.user.password)
		global.tnsconsole.error('this.user.email', this.user.email, 'this.user.password', this.user.password)
		global.tnsconsole.error('this.user', this.user)
		console.log("================")
		
		// console.log("================\n");




	}

	setTextFieldColors() {
		let emailTextField = <TextField>this.email.nativeElement;
		let passwordTextField = <TextField>this.password.nativeElement;

		let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
		emailTextField.color = mainTextColor;
		passwordTextField.color = mainTextColor;

		let hintColor = new Color(this.isLoggingIn ? "red" : "#C4AFB4");
		setHintColor({ view: emailTextField, color: hintColor });
		setHintColor({ view: passwordTextField, color: hintColor });
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.page.backgroundImage = "res://bg_login";
	}
	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
		this.setTextFieldColors();
		let container = <View>this.container.nativeElement;
		container.animate({
			backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
			duration: 200
		});
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

