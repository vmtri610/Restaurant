import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  selectedItem: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  navItems = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Menu',
      link: '/menu',
    },
  ];

  chooseItem(index: number) {
    console.log('index', index);
    this.selectedItem = index;
    this.router.navigate([this.navItems[index].link]);
  }

  reservationSelected() {
    this.router.navigate(['/reservation']);
  }
}
