import { Component, OnInit } from '@angular/core';
import { faCoffee, faCat, faAddressBook, faAnchor, faAppleAlt, faCog, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faCoffee = faCoffee;
  faCat = faCat;
  faAddressBook = faAddressBook;
  faAnchor = faAnchor;
  faAppleAlt = faAppleAlt;
  faCog = faCog;
  faUserAstronaut = faUserAstronaut;

  size: String = "2x";

  constructor() { }

  ngOnInit() {
  }

}
