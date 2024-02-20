import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  constructor(private router: Router) {}

  signOut() {
    this.router.navigateByUrl('login');
  }
}
