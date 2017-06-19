import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private isLoggedIn: boolean;
  user;
  private userDisplayName: string;
  private userEmail: string;

  constructor(public authService: AuthService, private router: Router){
    this.user = this.authService.afAuth.authState
    if(this.user == null){
      this.isLoggedIn = false;
      // this.user.google.displayName ='';
      // this.user.google.email ='';
      this.router.navigate(['login']);
    // } else {
    //   this.isLoggedIn = true;
    //   // this.userDisplayName = this.user.google.displayName;
    //   // this.user.google.email = this.user.google.email;
    //   this.router.navigate(['']);
    }
  }

}
