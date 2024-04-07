import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  url="https://us-central1-elitecarpetsv2.cloudfunctions.net/api/"

  user:any={}
  defaultClaims = {superAdmin:false, admin:false, informatikus:false, address:""}

  superAdminSubject= new Subject<boolean>
  superAdminBehavior= new BehaviorSubject<boolean>(false)

  userBehavior= new BehaviorSubject<any>(null)

  constructor(private fireauth:AngularFireAuth, private router:Router, private http: HttpClient) {
      this.getLoggedUser().subscribe(
        (user)=>{
          if (user){
            this.user=user
            user.getIdToken().then(
              (token)=>
                {
                  this.user.token=token
                  this.getClaims(this.user.uid).subscribe(
                    (claims)=> {
                      if (claims) {
                        this.user.claims=claims
                        this.superAdminSubject.next(this.user.claims.superAdmin)
                        this.superAdminBehavior.next(this.user.claims.superAdmin)
                        this.userBehavior.next(this.user)
                      }
                      else{
                        this.setCustomClaims(this.user.uid, this.defaultClaims)
                        this.user.claims=this.defaultClaims
                        this.superAdminSubject.next(false)
                        this.superAdminBehavior.next(false)
                        this.userBehavior.next(this.user)
                      }
                    }                   
                    
                  )
                }
            )
          }
          else {
            this.user=null
            this.userBehavior.next(this.user)
            this.superAdminSubject.next(false)
            this.superAdminBehavior.next(false)
          }
        }
      )
     }
     

     getUser(){
      return this.userBehavior
     }

     getIsSuperAdmin(){
      if (this.user && this.user.claims) return this.superAdminBehavior
      return this.superAdminSubject
     }

  getClaims(uid:string){
    let headers = new HttpHeaders().set('Authorization', this.user.token)
    return this.http.get(this.url+'users/'+uid+'/claims', {headers})  
  }

  getUsers(){   
    console.log("Felhasználók(user)", this.user)
    if (this.user) {
            let headers = new HttpHeaders().set('Authorization', this.user.token)
            return this.http.get(this.url+'users', {headers})  
    }
    return null
  }
    

  signIn(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }, err => {
      alert (err.message);
      this.router.navigate(['/signin']);
    })
  }


  signOut(){
    return this.fireauth.signOut()
  }

  getLoggedUser(){
    return this.fireauth.authState
  }

  isNotLogin(){
    if (this.user) return false
    return true
  }

  isLogin(){   
    return !this.isNotLogin()
  }

  forgotpassword(emial : string) {
    this.fireauth.sendPasswordResetEmail(emial).then( () => {
      this.router.navigate(['/verifyemail']);
    },err => {
      alert(err.message);
    })  
  }

  // uid:any,claims:any
  setCustomClaims( uid:any,claims:any){
      console.log("Claims, user", this.user)
      const body= {uid, claims}
      let headers = new HttpHeaders().set('Authorization', this.user.token)
      this.http.post(this.url+'setCustomClaims',body, {headers}).
              subscribe({
                next:()=>console.log("A claims beállítása sikeres!"),
                error:(e)=>console.log("Hiba a claimsnél: ",e)
              })
            }
  setDisplayName( uid:any,displayName:any){
      const body= {uid, displayName}
      let headers = new HttpHeaders().set('Authorization', this.user.token)
      this.http.post(this.url+'setDisplayName',body, {headers}).
              subscribe({
                next:()=>console.log("A displayName beállítása sikeres!"),
                error:(e)=>console.log("Hiba a displayName: ",e)
              })
            }
}