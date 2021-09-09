import { Component, ViewChild } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '@auth0/auth0-angular';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('snav') snav: MatSidenav;
  title = 'fgscore';
  isMobile = false;

  constructor(
    public auth: AuthService,
    public breakpointObserver: BreakpointObserver
  ) 
  {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
          if (this.snav) {
            this.snav.close();
          }
        }
      });
  }
}
