import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from './../../models/sesion';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ){} 
  
  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    setTimeout(() => {
      this.snackBar.open('Cerrando sesion','',{
          duration:1000,
      });
    });
    // this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
