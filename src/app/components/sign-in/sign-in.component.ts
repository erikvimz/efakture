import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import firebase from 'firebase/app'
import {LogService} from 'src/app/services/log.service'
import {SystemService} from 'src/app/services/system.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('errorDialog') errorDialog: TemplateRef<any>
  dialogTitle = ''
  dialogContent = ''
  signUp = false
  signInText = ''
  signInText2 = ''
  signInText3 = ''
  signInText4 = ''
  signInWithEmailUrl = ''

  constructor(
    private systemService: SystemService,
    private logService: LogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.signUp = this.route.snapshot.data.signUp
    this.signInText = this.signUp ? 'Registracija' : 'Prijava'
    this.signInText2 = this.signUp ? 'Registrirajte' : 'Prijavite'
    this.signInText3 = this.signUp ? 'registraciji' : 'prijavi'
    this.signInText4 = this.signUp ? 'registracijo' : 'prijavo'
    this.signInWithEmailUrl = this.signUp ? '/sign-up/email' : '/sign-in/email'
  }

  ngOnInit(): void {
    //
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await this.systemService.auth.signInWithPopup(provider)
      await this.router.navigateByUrl('/dashboard')
    } catch (error) {
      this.logService.error(error)
      this.dialogTitle = 'Napaka'
      this.dialogContent = `Med ${this.signInText4} z Google računom je prišlo do napake. Prosimo vas, da posikusite kasneje. Če se napaka ponavlja nas o tem prosimo obvestite.`
    }
  }
}
