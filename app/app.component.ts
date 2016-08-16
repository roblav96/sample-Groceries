import {Component} from '@angular/core'

@Component({
	selector: 'my-app',
	// template: './app.component.html',
	template: `
		<StackLayout>
			<Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
			<TextField [(ngModel)]="email" hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
			<TextField hint="Password" secure="true"></TextField>
			<Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
			<Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
		</StackLayout>
	`,
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})

export class AppComponent {

	email = "nativescriptrocks@telerik.com";
	isLoggingIn = true;

	submit() {
		console.log("You’re using: " + this.email);
		alert("You’re using: " + this.email);
	}
	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}

}

