import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2'

@Injectable()
export class AuthService {
  userDisplayName: string;
  userEmail:string;
  user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(this.provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      this.userDisplayName = result.user.displayName;
      this.userEmail = result.user.email;
      console.log(this.userDisplayName);
      console.log(this.userEmail);
      })
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
