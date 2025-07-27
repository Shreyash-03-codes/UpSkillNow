declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  imports: [],
  templateUrl: './authenticate.html',
  styleUrl: './authenticate.css'
})
export class Authenticate implements OnInit {


 constructor(private router: Router) {}

  ngOnInit() {
    // Wait until google script is fully loaded
    const checkGoogleLoaded = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        clearInterval(checkGoogleLoaded);
        this.initializeGoogleSignIn();
      }
    }, 100);
  }

  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id:
        '407452669347-umb8slo24fcjm9mb3o6odpba2c0n109m.apps.googleusercontent.com',
      callback: (response: any) => this.handleLogin(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      {
        theme: 'filled_blue',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'left',
      }
    );
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(resp: any) {
  if (resp && resp.credential) {
    const user = this.decodeToken(resp.credential);
    localStorage.setItem('user', JSON.stringify(user));
    
    // Navigate and force refresh after navigation
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}

}
