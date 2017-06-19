import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
// import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2'

@Injectable()
export class AuthService {
  userDisplayName: string = null;
  userEmail:string;
  user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(this.provider).then((result) => {
      this.userDisplayName = result.user.displayName;
      this.userEmail = result.user.email;
      this.router.navigate(['home'])
      })
    }


  makeUser(){

  }
  logout(){
    this.afAuth.auth.signOut();
  }


}






// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//   console.log(userDisplayName);
//   console.log(userEmail);
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
// })
